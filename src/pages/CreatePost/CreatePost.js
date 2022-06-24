import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import UsePost from '../../hooks/UsePost';
import UseUser from '../../hooks/UseUser';
import ServerInfo from '../../utils/ServerInfo';

export default function CreatePost() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { posts, setPosts } = UsePost();
    const { user} = UseUser();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const config = {
        headers: {
            'Content-type': "Application/json",
            'devicetoken': '1234567890',
            'authorization': `Bearer ${user.jwtToken}`
        }
    }

    const onSubmit = data => {
        setLoading(true)
        console.log(data)
        axios.post(`${ServerInfo.baseUrl}/createPost`, data,config)
            .then(response => {
                console.log(response.data)
                const { type, message, data } = response.data
                if (type == 'error') {
                    setError(message)
                    setLoading(false)
                }
                else {
                    setError("")
                    setLoading(false)
                    navigate('/myPost')
                }
            })
            .catch(error => {
                setError(error.message);
                console.error('There was an error!', error);
                setLoading(false)
            });


    };

    return (
        <section>

            {

                loading && <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />

            }

            <h2 className="form-title">Create New Funny Post</h2>
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
                    <input type="text" className="form-control" id="floatingInput" placeholder="Enter Image URL"
                        {
                        ...register("image",
                            { required: true })
                        }
                    />
                    <label htmlFor="floatingInput">Image URL</label>
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


                <div className="form-group form-button">
                    <input type="submit" name="create_post" id="create_post" className="form-submit" value="Create New Post" />
                </div>
            </form>
            <h2>{error}</h2>

        </section>
    )
}
