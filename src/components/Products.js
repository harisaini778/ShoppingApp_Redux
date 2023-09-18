import React from "react";
import { Container, Button, Modal, Stack } from "react-bootstrap";

const Products = () => {
  return (
    <div>
      <Container className="mt-3">
        <h1>Buy Your Favorite Products</h1>
      </Container>
      <Container className="mt-4">
        <div style={{ position: "initial", display: "block" }}>
          <Modal.Dialog>
            <Modal.Header className="p-2"
              style={{
                backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                display: "flex", 
                justifyContent: "space-between", 
              }}
            >
              <Stack direction="horizontal">
                <div
                  style={{
                    fontWeight: "bolder",
                                      fontSize: "2rem",
                    color:"white"
                  }}
                >
                  Test
                </div>
              </Stack>
              <div>
                <Button
                  style={{
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                                      fontWeight: "bolder",
                    color:"white"
                  }}
                  className="btn-warning"
                >
                  Rs.6
                </Button>
              </div>
            </Modal.Header>
            <Modal.Body className="p-4"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                  backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                color:"white"
              }}
            >
              This is a first product - amazing!
            </Modal.Body>
            <Modal.Footer className="p-2"
              style={{
                border: "none",
                fontWeight: "bolder",
                backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                display: "flex",  
                              justifyContent: "flex-end", 
              }}
            >
                          <Button className="btn-warning"
                            style={{
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                                fontWeight: "bolder",
                    color:"white"
                  }}>Add To Cart</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Container>
    </div>
  );
};

export default Products;
