import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from './components/Layout/Layout';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Orders from './components/Orders/Orders';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Route/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AddTutorial from './components/Products/add-product.component';
import Tutorial from './components/Products/product.component';
import TutorialsList from './components/Products/products-list.component';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/forgot-password'>
            <ForgotPassword />
          </Route>
          <Route path='/reset-password'>
            <ResetPassword />
          </Route>
          <Route path='/orders' component={Orders}>
            <Orders />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>

  );
};

export default App;
