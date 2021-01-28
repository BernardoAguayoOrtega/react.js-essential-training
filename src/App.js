import './App.css';

function SecretComponent() {
	return <h1>Secret Information</h1>;
}

function RegularComponent() {
	return <h1>Everybody can see this</h1>;
}

function App({authorized}) {
	return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
}

export default App;
