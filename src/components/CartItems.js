import React from "react";
import { Container, Modal, Row, Col, Stack, Button } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartActions } from "../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const decreaseItemQuantityHandler = (itemId) => {
    dispatch(CartActions.decreaseItemQuantity(itemId));
  };

  const increaseItemQuantityHandler = (itemId) => {
    dispatch(CartActions.increaseItemQuantity(itemId));
  };

  return (
    <div>
      <Container className="mt-4">
        <div
          className="modal show"
          style={{
            display: 'block',
            position: 'initial'
          }}
        >
          <Modal.Dialog>
            <Modal.Header
              style={{
                backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                color: "white"
              }}
            >
              <Modal.Title>Your Shopping Cart</Modal.Title>
            </Modal.Header>

            <Modal.Body
              style={{
                backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                color: "white"
              }}
            >
              <Container>
                {cartItems.map((item) => (
                  <div key={item.itemId}>
                    <Row className="m-2 ms-auto">
                      <Col style={{direction:"flex",justifyContent:"flex-start"}}><h3>{item.name}</h3></Col>
                      <Col>
                        <Stack direction="horizontal">
                          <div className="m-1" style={{ fontSize: "1.5rem", fontWeight: "bolder",direction:"flex",justifyContent:"flex-end"}}>Rs.{item.price}</div>
                          <div className="m-1" style={{ fontSize: "1.2rem", fontWeight: "bolder",direction:"flex",justifyContent:"flex-end"}}>
                            <sub><em>(Rs. {item.price}/item)</em></sub>
                          </div>
                        </Stack>
                      </Col>
                    </Row>
                    <Row className="m-2 ms-auto">
                      <Col><span className="m-1" style={{ fontSize: "1rem", fontWeight: "bolder" }}>x</span>
                        <span className="m-1" style={{ fontSize: "2rem", fontWeight: "bolder" }}>{item.quantity}</span></Col>
                      <Col>
                        <Stack direction="horizontal" gap="2">
                          <Button className="btn-warning" onClick={() => increaseItemQuantityHandler(item.productId)}
                            style={{ fontSize: "1rem", fontWeight: "bolder", color: "white" }}>
                            <FaPlus size={15} />
                          </Button>
                          <Button className="btn-warning" onClick={() => decreaseItemQuantityHandler(item.productId)}
                            style={{ fontSize: "1rem", fontWeight: "bolder", color: "white" }}>
                            <FaMinus size={15} />
                          </Button>
                        </Stack>
                      </Col>
                    </Row>
                  </div>
                ))}
                <Container>
                <Row>
                  <Col><h4>Total Items: {totalQuantity}</h4></Col>
                  <Col><h4>Total Price: Rs.{totalPrice}</h4></Col>
                </Row>
                </Container>  
              </Container>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      </Container>
    </div>
  );
}

export default CartItems;
