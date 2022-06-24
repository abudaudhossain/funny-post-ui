import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import img from "../../assets/images/img.jpg"
import Text from '../../components/Text'
import UseUser from '../../hooks/UseUser'
import { colors } from '../../theme/colors'
import ServerInfo from '../../utils/ServerInfo'

export default function Details() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({})
  const { user } = UseUser();
  const { register, handleSubmit } = useForm();
  const { postToken } = useParams();
  let imgUrl = img;

  const config = {
    headers: {
      'Content-type': "Application/json",
      'devicetoken': '1234567890',
      'authorization': `Bearer ${user.jwtToken}`
    }
  }


  useEffect(() => {
    axios.get(`${ServerInfo.baseUrl}/post/${postToken}`, config)
      .then(response => {
        console.log(response.data)
        const { type, message, data } = response.data
        if (type == 'error') {
          setError(message)
          setLoading(false)
        }
        else {
          setPost(data[0])
          setError("")
          setLoading(false)
        }
      })
      .catch(error => {
        setError(error.message);
        console.error('There was an error!', error);
        setLoading(false)
      });
  }, [postToken])

  if (post?.image) {
    imgUrl = post.image
  }

  return (
    <>
      {
        post ? (<>
          <div className=''>
            <div className='mb-5' style={{ margin: '10px', justifyContent: "center", display: "flex" }}>
              <img className='img-fluid' src={imgUrl} style={{ width: "96%", height: "400px", padding: '20px' }} />
            </div>
            {
              post.userToken === user.AccountNo && (
                <>
                  <div class="alert alert-success" role="alert">
                    This is your post . Change some thing to click <Link to={`/postUpdate/${post.token}`}>Update Now</Link>
                  </div>
                </>
              )
            }
            <div className='p-4'>
              <Text preset='title'>{post.title}</Text>
              <div style={{ color: "#bfbfbf", fontFamily: "Poppins, Arial, serif" }} className="my-2">
                <span className='me-2'><i className="fa-solid fa-calendar-days p-1"></i>calendar</span>
                <span className='me-2'><i className="fa-solid fa-folder p-1"></i>{post.category ? post.category : "null"}</span>
                <span className='me-2'><i className="fa-solid fa-comment p-1"></i>Comment(10)</span>
              </div>
              <Text style={{ marginTop: '40px' }}>
                {post.description}
              </Text>

            </div>
          </div>
        </>) : (<h1>This post is not available</h1>)
      }
    </>
  )
}
