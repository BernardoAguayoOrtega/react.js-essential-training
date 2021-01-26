import './App.css';

function Header() {

  return(
    <header>
      <h1>Bernardo Aguayo</h1>
    </header>
  )
}

function Content() {

  return(
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  )
}

function Footer() {

  return(
    <footer>I am an incredible footer</footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
