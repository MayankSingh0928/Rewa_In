import { navItems } from '../data/navigation.js';

function Header({ activePath, goTo, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={(event) => goTo(event, '/')}>
        Hotel Rewa In
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.path}
            className={activePath === item.path ? 'active' : ''}
            href={item.path}
            onClick={(event) => goTo(event, item.path)}
          >
            {item.label}
          </a>
        ))}
        <a className="book-link" href="/rooms" onClick={(event) => goTo(event, '/rooms')}>
          Book Now
        </a>
      </nav>
    </header>
  );
}

export default Header;
