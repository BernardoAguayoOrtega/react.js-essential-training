import './App.css';
import restaurant from './restaurant/restaurant.jpeg'

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
      <img src={restaurant} alt="restaurant"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => <li key={dish.index}>{dish.dish}</li>)}
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

const dishesObjects = dishes.map((dish, index) => ({dish, index}))

function App() {
  return (
    <div className="App">
      <Header name="Bernie"/>
      <Content adjective='Amazing' dishes={dishesObjects} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
