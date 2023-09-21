import './App.css';
import NavBar from './components/Navbar';
import CartItems from "./components/CartItems";
import Products from './components/Products';
import { useSelector } from "react-redux";

function App() {

 const showCart =  useSelector((state) => state.ui.cartIsVisible);

  return (
    <div className="App">
      <NavBar />
     {showCart &&  <CartItems />}
      <Products/>
    </div>
  );
}

export default App;