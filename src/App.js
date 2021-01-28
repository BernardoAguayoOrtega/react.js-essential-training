import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
	const [emotion, setEmotion] = useState('happy');

	const handleOnClick = () => setEmotion('frustrate');
	
	useEffect(() => {
		console.log(`It's ${emotion} around here`)
	});

	return (
		<>
			<h1>Current emotion is {emotion}.</h1>
			<button onClick={handleOnClick}>Frustrate</button>
		</>
	);
}
