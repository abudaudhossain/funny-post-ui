import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import MyButton from '../../components/MyButton';
import Post from '../../components/Post';
import Text from '../../components/Text';
import UseUser from '../../hooks/UseUser';
import { colors } from '../../theme/colors';
import ServerInfo from '../../utils/ServerInfo';

export default function MyAccount() {
  const { user } = UseUser();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const config = {
    headers: {
      'Content-type': "Application/json",
      'devicetoken': '1234567890',
      'authorization': `Bearer ${user.jwtToken}`
    }
  }

  useEffect(() => {
    axios.get(`${ServerInfo.baseUrl}/mypost`, config)
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

  return (
    <Container>
      <Row>
        <div className='post-card' style={{ flexDirection: "column" }}>
          <div className='img-container' style={{ margin: '10px' }}>
            <img src="https://ychef.files.bbci.co.uk/976x549/p0738j5f.jpg" style={{ width: "250px", height: "250px", borderRadius: 50 }} />
          </div>
          <div className='px-4'>
            <Text preset='title'>
              {user.name}
            </Text>
            <Text>
              {user.email}
            </Text>
          </div>
        </div>
      </Row>
      <Row>
        <Col>
          <div className='d-flex justify-content-between align-items-center'>
            <Text preset='title'>My Post</Text>
            <Link to="/createPost" style={{ color: colors.bgBtn }}>Create New Post</Link>
          </div>
          {

            loading ? (
              <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />
            ) : (
              posts.map((post, index) => (
                <div>
                  <Post key={index} post={post} />
                  <MyButton>Update</MyButton>
                </div>
              ))
            )

          }
        </Col>
      </Row>
    </Container>
  )
}
