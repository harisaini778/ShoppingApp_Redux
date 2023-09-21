import './App.css';
import NavBar from './components/Navbar';
import CartItems from "./components/CartItems";
import Products from './components/Products';
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from 'react';
import { Fragment } from 'react';
import { UiActions } from './store/ui-slice';
import Notification from './components/Notification'; // Correct import statement

function App() {

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  console.log("notification is : ", notification);

  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
  const sendCartData = async () => {
    dispatch(UiActions.showNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending cart data!",
    }));

    try {
      const response = await fetch("https://redux-shopping-app-88c0e-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      } else {
        dispatch(UiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        }));
      }
    } catch (error) {
      dispatch(
        UiActions.showNotification({
          status: "failed",
          title: "Failed!",
          message: "Sending cart data failed!",
        })
      );
    }
  };

    sendCartData();
    
}, [cart, dispatch]);


   

  return (
    <div className="App">
      <NavBar />
          <Fragment>
        {notification && <Notification status={notification.status}
        title={notification.title} message={notification.message}
        />}
      </Fragment>
     {showCart &&  <CartItems />}
      <Products/>
    </div>
  );

};

export default App;