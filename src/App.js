import { useEffect, useMemo, useState } from 'react';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutPage from './pages/AboutPage.js';
import BookPage from './pages/BookPage.js';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import RoomsPage from './pages/RoomsPage.js';
import { getRoutePath, getSearchParams, normalizePath } from './utils/router.js';

function App() {
  const [path, setPath] = useState(normalizePath(`${window.location.pathname}${window.location.search}`));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(`${window.location.pathname}${window.location.search}`));

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, [path]);

  const page = useMemo(() => {
    const routePath = getRoutePath(path);
    const searchParams = getSearchParams(path);

    switch (routePath) {
      case '/rooms':
        return <RoomsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/book':
        return <BookPage selectedRoomSlug={searchParams.get('room')} />;
      default:
        return <HomePage />;
    }
  }, [path]);

  function goTo(event, targetPath) {
    event.preventDefault();
    const nextPath = normalizePath(targetPath);

    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
  }

  return (
    <>
      <Header activePath={getRoutePath(path)} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{page}</main>
      <Footer goTo={goTo} />
    </>
  );
}

export default App;
