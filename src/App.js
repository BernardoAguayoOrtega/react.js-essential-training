import './App.css';

function SecretComponent() {
	return <h1>Secret Information</h1>;
}

function RegularComponent() {
	return <h1>Everybody can see this</h1>;
}

function App(props) {
	if (props.authorized) {
    return <SecretComponent />
	} else {
    return <RegularComponent />
  }
}

export default App;
