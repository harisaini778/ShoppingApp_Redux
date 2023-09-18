import React from "react";
import { Container, Button, Modal, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";

const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "This is the first product description.",
  },
  {
    id: 2,
    title: "Product 2",
    price: 15,
    description: "This is the second product description.",
  },
  // Add more products as needed
];

const Products = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    // Pass the product as payload to addItemToCart action
      dispatch(CartActions.addItemToCart(product));
  };

  return (
    <div>
      <Container className="mt-3">
        <h1>Buy Your Favorite Products</h1>
      </Container>
      <Container className="mt-4">
        {dummyProducts.map((product) => (
          <div key={product.id}>
            <Modal.Dialog>
              <Modal.Header
                className="p-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="horizontal">
                  <div
                    style={{
                      fontWeight: "bolder",
                      fontSize: "2rem",
                      color: "white",
                    }}
                  >
                    {product.title}
                  </div>
                </Stack>
                <div>
                  <Button
                    style={{
                      borderRadius: "10px",
                      fontSize: "1.2rem",
                      fontWeight: "bolder",
                      color: "white",
                    }}
                    className="btn-success"
                  >
                    Rs.{product.price}
                  </Button>
                </div>
              </Modal.Header>
              <Modal.Body
                className="p-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  backgroundImage:
                    "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                  color: "white",
                }}
              >
                {product.description}
              </Modal.Body>
              <Modal.Footer
                className="p-2"
                style={{
                  border: "none",
                  backgroundImage:
                    "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {/* Pass the product to addToCartHandler */}
                <Button
                  onClick={() => addToCartHandler(product)}
                  className="btn-warning"
                  style={{
                    borderRadius: "15px",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Add To Cart
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Products;
