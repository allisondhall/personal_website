require('./sass/main.scss');

var ReactDOM = require('react-dom');
var app = document.getElementById('app');
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  app
);