import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Cockpit = () => {
	//HOOKS
	const [datevalue, setDateValue] = useState(
		new Date().toISOString().split('T')[0]
	);
	const [image, setImage] = useState();
	const [explanation, setExplanation] = useState();
	const [title, setTitle] = useState();
	const [author, setAuthor] = useState();

	//GET DATE OF TODAY
	const dateMax = new Date().toISOString().split('T')[0];

	//INPUT VALUE MANAGEMENT
	const handleChange = (event) => {
		setDateValue(event.target.value);
	};

	//Axios request
	axios
		.get(
			`https://api.nasa.gov/planetary/apod?api_key=XCoIaicQsdU3X9dl6xdVXHgrPDawLmKBFrgpVhlj&date=${datevalue}`
		)
		.then((res) => {
			const spaceData = res.data;
			console.log(spaceData);
			setImage(spaceData.hdurl);
			setExplanation(spaceData.explanation);
			setTitle(spaceData.title);
			setAuthor(spaceData.copyright);
		})
		.catch(console.log('une erreur est survenue'));

	return (
		<div>
			<div className='date_input'>
				<form>
					<input
						type='date'
						id='date'
						name='date'
						value={datevalue}
						onChange={handleChange}
						min='1995-06-16'
						max={dateMax}
					/>
				</form>
			</div>
			<div className='picture'>
				<img className='space_image' src={image} alt='' />
				<h1>{title}</h1>
				<p className='explanation'> {explanation} </p>
				<p className='author'> Copyright: {author} </p>
			</div>
		</div>
	);
};
export default Cockpit;
