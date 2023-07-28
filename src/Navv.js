import React from 'react'
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navv() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" style={{ fontWeight: '600', color: 'black', marginTop: '60px' }}>
                <Container >
                    <Navbar.Brand className='text-light' style={{ fontFamily: "'Anton' sans-serif", letterSpacing: '0.3rem', fontSize: '30px', fontWeight: '900' }} >H E M <span className='green'>A N G</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"    >
                        <Nav
                            className="ms-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px', color: "white" }}
                            navbarScroll
                        >
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }} ><Link to="/Home">Home</Link></Nav.Link>
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }}><Link to="/About">About</Link></Nav.Link>
                            <Nav.Link className='text-light' style={{ marginRight: '20px' }} ><Link to="/Portfolio">Portfolio</Link></Nav.Link>

                            <Nav.Link className='text-light' style={{ marginRight: '20px' }} ><Link to="/Contact">Contact</Link></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />



        </>
    )
}
