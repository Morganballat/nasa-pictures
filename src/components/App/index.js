import React from 'react';
import './style.css';

import Cockpit from '../Cockpit';
import Header from '../Header';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Cockpit />
		</div>
	);
};

export default App;
