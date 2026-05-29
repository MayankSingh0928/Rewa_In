export function internalGo(event) {
  event.preventDefault();
  const url = new URL(event.currentTarget.href);
  const path = normalizePath(`${url.pathname}${url.search}`);

  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function normalizePath(path) {
  const [pathname, search = ''] = path.split('?');

  if (!pathname || pathname === '/index.html') {
    return '/';
  }

  const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  return search ? `${cleanPath}?${search}` : cleanPath;
}

export function getRoutePath(path) {
  return normalizePath(path).split('?')[0];
}

export function getSearchParams(path) {
  const [, search = ''] = path.split('?');
  return new URLSearchParams(search);
}
