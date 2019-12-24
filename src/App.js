import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import About from './About';
import ChangePassword from "./ChangePassword";
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import Profile from "./Profile";

const routes = {
  '/': () => <HomePage />,
  '/about': () => <About />,
  '/change_password': () => <ChangePassword />,
  '/profile': () => <Profile />
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}
export default App;
