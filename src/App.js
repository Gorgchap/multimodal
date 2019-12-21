import React from 'react';
import './App.css';
import About from './About/About';
import HomePage from './HomePage/HomePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

import {useRoutes} from 'hookrouter';

const routes = {
  '/': () => <HomePage />,
  '/about': () => <About />,
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}
export default App;
