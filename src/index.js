import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import Components from 'views/Components/Components.js';
import Main from 'views/Main/Main.js';
import Order from 'views/Order/Order.js';
import Login from 'views/Login/Login.js';
import Register from 'views/Register/Register.js';

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path='/main' component={Main} />
			<Route path='/order' component={Order} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Route path='/' component={Components} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
