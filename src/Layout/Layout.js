import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LeftSide from './LeftSide'
import MyNav from './MyNav'
import RightSide from './RightSide'

export default function Layout({ children, ...props }) {
    return (
        <>
            <MyNav />
            <Container fluid className='mx-4'>
                <Row>
                    <Col lg='3' style={{ position: "fixed"}}>
                        <LeftSide />
                    </Col>
                    <Col lg='3' >
                        
                    </Col>
                    <Col>
                        <Row>
                        <Col>{children}</Col>
                        <Col lg="4">
                            <RightSide />
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
