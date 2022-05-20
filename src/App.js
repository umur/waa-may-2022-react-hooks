import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './containers/Dashboard';
import Header from './Component/Header';
import PageRoutes from './containers/PageRoutes';

const App = () => {
  axios.defaults.baseURL = 'http://localhost:8080';

  return (
    <BrowserRouter>
      {/* <Dashboard /> */}
      <Header />
      <PageRoutes />
    </BrowserRouter>
  );
}



export default App;
