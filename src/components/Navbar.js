import React from "react";
import { Container, Navbar, Nav, Button, Badge, Stack } from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";

const NavBar = () => {


    return (
        <div>
            <Navbar style={{
                backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
                fontWeight: "bolder"
            }}> 
                 
                <Container>

                <Navbar.Brand
                style={{color: "white"}}>
                  <h1>ReduxCart</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Stack direction="horizontal">
                                <Button className="btn-success m-2"
                                    style={{
                                        fontWeight: "bold",
                                        color : "white"
                                    }}>My Cart
                                    <span className="m-2">
                                   <FaShoppingCart size={25}/></span>
                                    <Badge className="bg-warning m-1"
                                    style={{fontWeight:"bolder",fontSize:"1rem"}}>2</Badge> 
                          </Button>     
                   </Stack>
                        
                </Nav>
                    </Navbar.Collapse>
                      </Container>
            </Navbar> 
        </div>
    )
}

export default NavBar;