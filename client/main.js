import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(
  <BrowserRouter><App /></BrowserRouter>
  , document.getElementById('render-target'));
});
