import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import UseUser from '../../hooks/UseUser';
import ServerInfo from '../../utils/ServerInfo';

export default function PostUpdate() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({})
    const { user, setUser } = UseUser();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { postToken } = useParams();

    console.log(postToken)

    const onSubmit = data => {
        // setLoading(true)
        console.log(data)
        // axios.post(`${ServerInfo.baseUrl}/login`, data, ServerInfo.config)
        //     .then(response => {
        //         console.log(response.data)
        //         const { type, message, data } = response.data
        //         if (type == 'error') {
        //             setError(message)
        //             setLoading(false)
        //         }
        //         else {
        //             setUser(data)
        //             setError("")


        //             setLoading(false)
        //         }
        //     })
        //     .catch(error => {
        //         setError(error.message);
        //         console.error('There was an error!', error);
        //         setLoading(false)
        //     });


    };
    const config = {
        headers: {
            'Content-type': "Application/json",
            'devicetoken': '1234567890',
            'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVG9rZW4iOiI2MjgyN2hjSnVuZGVmaW5lZGZBQ0NzTlRXVTE3MDM3Iiwic2Vzc2lvblRva2VuIjoiNTA1NTB3WENNUUFVVEhTZXNMYW5keDYyNTA1IiwiaWF0IjoxNjU1ODM0NTAyLCJleHAiOjE2NTg0MjY1MDJ9.4kp97Gjkk3lwaqNjxgaTFz0lm8wln3GNcGg3sJFUdQ0`
            // 'authorization': `Bearer ${user.jwtToken}`
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
                    setPost(data)
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
    console.log(post)
    return (
        <section>

            {

                loading && <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />

            }

            <h2 className="form-title">Update Funny Post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Title"
                        {
                        ...register("title",
                            { required: true })
                        }
                    />
                    <label htmlFor="floatingInput">Post Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Category"
                        {
                        ...register("category",
                            { required: true })
                        }
                    />
                    <label htmlFor="floatingInput">Post Category</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Tags"
                        {
                        ...register("tags",
                            { required: true })
                        }
                    />
                    <label htmlFor="floatingInput">Add Tags</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}
                        {
                        ...register("description",
                            { required: true })
                        }
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <div className="mb-3">
                    <input type="file" className="form-control" id="floatingInput" placeholder="image"
                        {
                        ...register("image",
                            { required: true })
                        }
                    />

                </div>
                <div className="form-group form-button">
                    <input type="submit" name="create_post" id="create_post" className="form-submit" value="Create New Post" />
                </div>
            </form>
            <h2>{error}</h2>

        </section>
    )
}
