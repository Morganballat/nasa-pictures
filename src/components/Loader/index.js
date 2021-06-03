import React from 'react';
import './style.css';

import SkyrocketGif from './skyrocket.gif';

const Loader = () => (
	<div className='loader_container'>
		<img src={SkyrocketGif} alt='' className='skyrocket_gif' />
	</div>
);

export default Loader;
