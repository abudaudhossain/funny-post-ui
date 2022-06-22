import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Post from '../../components/Post'
import UsePost from '../../hooks/UsePost'
import UseUser from '../../hooks/UseUser';
import ServerInfo from '../../utils/ServerInfo';

export default function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { posts, setPosts } = UsePost();


  useEffect(() => {
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

  return (
    <main>
      {

        loading ? (
          <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />
        ) : (
          posts.map((post, index) => (
            <Post key={index} post={post} />
          ))
        )

      }


    </main>
  )
}
