import React from "react";
import { Container, Modal, Row, Col, Stack, Button } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartItems = () => {

    return (
        <div>
            <Container className="mt-4">
              <div
      className="modal show"
                    style={{
                        display: 'block', position: 'initial' }}
    >
                    <Modal.Dialog>
        <Modal.Header  style={{ backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                color:"white"}}>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body  style={{ backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                color:"white"}}>
                            <Container>
                                <Row className="m-2 ms-auto">
                                    <Col><h1>Test Item</h1></Col>
                                    <Col>
                                        <Stack direction="horizontal">
                                            <div className="m-1"
                                            style={{fontSize:"1.5rem",fontWeight:"bolder"}}>Rs.18.00</div>
                                            <div className="m-1" style={{ fontSize: "1.2rem", fontWeight: "bolder" }}><sub>
                                           <em>(Rs.3/item)</em> </sub></div>
                                            
                                        </Stack>
                                        
                                    </Col>
                                </Row>
                                <Row className="m-2 ms-auto">
                                    <Col><span className="m-1" style={{fontSize:"1rem",fontWeight:"bolder"}}>x</span>
                                    <span className="m-1" style={{fontSize:"2rem",fontWeight:"bolder"}}>3</span></Col>
                                    <Col>
                                        <Stack direction="horizontal" gap="2">
                                            <Button className="btn-warning"
                                                style={{ fontSize: "1rem", fontWeight: "bolder",color:"white" }}><FaPlus size={15}/></Button>
                                            <Button className="btn-warning"
                                                style={{ fontSize: "1rem", fontWeight: "bolder",color:"white" }}><FaMinus size={15} /></Button>
                                        </Stack>
                                    </Col>
                                </Row>
         </Container>
        </Modal.Body>
      </Modal.Dialog>
    </div>
            </Container>
        </div>
    )
}

export default CartItems;