import './App.css';
import NavBar from './components/Navbar';
import CartItems from "./components/CartItems";
import Products from './components/Products';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

function App() {

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch("https://redux-shopping-app-88c0e-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body:JSON.stringify(cart),
    })
  },[cart]) 

  return (
    <div className="App">
      <NavBar />
     {showCart &&  <CartItems />}
      <Products/>
    </div>
  );
}

export default App;