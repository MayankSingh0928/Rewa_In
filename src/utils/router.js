export function internalGo(event) {
  event.preventDefault();
  const path = normalizePath(new URL(event.currentTarget.href).pathname);
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function normalizePath(path) {
  if (!path || path === '/index.html') {
    return '/';
  }

  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
