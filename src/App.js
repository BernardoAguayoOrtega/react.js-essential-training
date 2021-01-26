import './App.css';

function Header(props) {

  return(
    <header>
      <h1>{props.name}'s blog</h1>
    </header>
  )
}

function Content(props) {

  return(
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish, i) => <li key={i}>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer(props) {

  return(
    <footer>Copyright {props.year}</footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
]

function App() {
  return (
    <div className="App">
      <Header name="Bernie"/>
      <Content adjective='Amazing' dishes={dishes} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
