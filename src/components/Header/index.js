import React from 'react';
import './style.css';

import Signature from './images/signature.png';
import Nasa from './images/nasa.png';

const Header = () => (
	<div className='header'>
		<img src={Signature} className='signature' alt='signature_mb' />
		<p className='feat'>X</p>
		<img src={Nasa} className='nasa_logo' alt='nasa_logo' />
	</div>
);

export default Header;
