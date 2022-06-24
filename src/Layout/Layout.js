import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import LeftSide from './LeftSide'
import MyNav from './MyNav'
import RightSide from './RightSide'
import UseUser from '../hooks/UseUser'
import UsePost from '../hooks/UsePost'
import axios from 'axios'
import ServerInfo from '../utils/ServerInfo'

export default function Layout({ children, ...props }) {
    const { user, setUser } = UseUser();
    const { posts, setPosts } = UsePost();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userInfo')));
        axios.get(`${ServerInfo.baseUrl}/allPost`, ServerInfo.config)
            .then(response => {
                console.log(response.data)
                const { type, message, data } = response.data
                if (type == 'error') {
                    setError(message)
                    setLoading(false)
                }
                else {
                    setPosts(data)
                    setError("")
                    setLoading(false)
                }
            })
            .catch(error => {
                setError(error.message);
                console.error('There was an error!', error);
                setLoading(false)
            });
    }, [])
    console.log(user)

    return (
        <>
            <MyNav />
            <Container fluid className='mx-4'>
                <Row>
                    <Col lg='3' style={{ position: "fixed" }}>
                        <LeftSide />
                    </Col>
                    <Col lg='3' >

                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                {

                                    loading ? (
                                        <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />
                                    ) : children


                                }</Col>
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
