import './App.css';
import NavBar from './components/Navbar';
import CartItems from "./components/CartItems";
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartItems />
      <Products/>
    </div>
  );
}

export default App;
