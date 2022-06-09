import React, { useState } from 'react'
import { Container, Form, Button, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import MyButton from '../components/MyButton';
import LeftSide from './LeftSide';

import '../assets/styles/myNav.css'
import { colors } from '../theme/colors';
import { Link } from 'react-router-dom';

export default function MyNav() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Button variant="primary" onClick={handleShow} style={{ display: 'none' }}>
                        Launch
                    </Button>
                    <Navbar.Brand href="/">
                        <span className='logo'>Funnny <span style={{ color: colors.bgBtn }}>Post</span></span>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to="/signIn">

                            <MyButton >Sign In</MyButton>
                        </Link>
                        <Link to="/signUp">
                            <MyButton >Sign Up</MyButton>
                        </Link>
                    </Nav>
                </Container>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title> Funnny Post</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <LeftSide />
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>


        </>
    )
}
