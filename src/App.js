import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import About from './About/About';
import ChangePassword from "./ChangePassword/ChangePassword";
import HomePage from './HomePage/HomePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Profile from "./Profile/Profile";

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
