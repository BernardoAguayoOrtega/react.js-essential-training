import { useState, useEffect } from 'react';
import './App.css';

//https://api.github.com/users/BernardoAguayoOrtega

export default function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		fetch('https://api.github.com/users/BernardoAguayoOrtega')
			.then((response) => response.json())
			.then(setData)
			.then(() => setLoading((value) => (value = false)))
			.catch(setError);
	}, []);

	if (loading) return <h1>Is loading</h1>;

	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return (
		<div>
			<h1>{data?.name}</h1>
			<p>{data?.location}</p>
			<img alt={data?.login} src={data?.avatar_url} />
		</div>
	);
}
