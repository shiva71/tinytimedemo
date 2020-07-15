import React from 'react';
//import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Projects from './components/projects/Projects';
import AddProjectModal from './components/projects/AddProjectModal';
import { Provider } from 'react-redux';
import store from './store';
import GetCurrentProject from './components/projects/GetCurrentProject';
import ResetData from './components/settings/ResetData';
import ResetDataModal from './components/settings/ResetDataModal';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FloatModal from './components/layout/FloatModal';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route
            exact
            path='/projects/:id'
            component={GetCurrentProject}
          ></Route>
          <Route exact path='/settings' component={ResetData}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
        </Switch>
        <AddProjectModal />
        <ResetDataModal />
        <FloatModal />
      </Router>
    </Provider>
  );
};

export default App;
