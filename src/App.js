import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import ChangePassword from "./ChangePassword";
import Dataset from "./Dataset";
import Experiment from "./Experiment"
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import Profile from "./Profile";

const routes = {
  '/': () => <HomePage />,
  '/change_password': () => <ChangePassword />,
  '/dataset': () => <Dataset/>,
  '/experiment': () => <Experiment/>,
  '/profile': () => <Profile />
};

function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />;
}
export default App;
