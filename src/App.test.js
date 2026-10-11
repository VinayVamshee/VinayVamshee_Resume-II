import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: () => null,
  Link: ({ children, to, className, onClick }) => (
    <a href={to} className={className} onClick={onClick}>{children}</a>
  ),
  NavLink: ({ children, to, className, onClick }) => {
    const resolvedClass = typeof className === 'function' ? className({ isActive: false }) : className;
    return <a href={to} className={resolvedClass} onClick={onClick}>{children}</a>;
  },
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => jest.fn(),
  useParams: () => ({}),
}), { virtual: true });

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

jest.mock('lenis', () => {
  return class MockLenis {
    constructor() {
      this.raf = jest.fn();
      this.destroy = jest.fn();
      this.scrollTo = jest.fn();
    }
  };
});

import App from './App';

test('renders portfolio brand name in navigation', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  await act(async () => {
    root.render(<App />);
  });

  expect(container.textContent).toContain('Vinay Vamshee');

  await act(async () => {
    root.unmount();
  });
  container.remove();
});

