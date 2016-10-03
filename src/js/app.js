// react
import React from 'react';
import { render } from 'react-dom';

// Provider
import { Provider } from 'react-redux';

//components
import App from "./components/App";

// store
import store from "./store";

// define the provider/router
const provider = (
	<Provider store={store}>
		<App />
	</Provider>
);


function init() {
    render( 
    	provider, document.getElementById('exp')
    );
}

// not really needed but...
// make sure we get to see the preloader as well.
// setTimeout(function() { init(); }, 3000);
init();