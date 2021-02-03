import { useState, useEffect } from 'react';
import './App.css';

//https://api.github.com/users/BernardoAguayoOrtega

export default function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch('https://api.github.com/users/BernardoAguayoOrtega')
			.then((response) => response.json())
			.then(setData);
	});
	
	if (data) {
		return <div>we have data</div>
	}

	return <>we do not have data</>;
}
