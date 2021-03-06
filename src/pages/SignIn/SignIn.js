import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import UseUser from '../../hooks/UseUser';
import ServerInfo from '../../utils/ServerInfo';


const SignIn = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, setUser } = UseUser();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const goBack = () => navigate(-1);

    const onSubmit = data => {
        setLoading(true)

        axios.post(`${ServerInfo.baseUrl}/login`, data, ServerInfo.config)
            .then(response => {
                console.log(response.data)
                const { type, message, data } = response.data
                if (type == 'error') {
                    setError(message)
                    setLoading(false)
                }
                else {
                    setUser(data)
                    setError("")
                    localStorage.setItem("userInfo", JSON.stringify(data))
                    goBack(-1)
                    setLoading(false)
                }
            })
            .catch(error => {
                setError(error.message);
                console.error('There was an error!', error);
                setLoading(false)
            });


    };

    useEffect(() => {
        if (user) {
            goBack(-1)
        }
    }, [])


    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    {

                        loading && <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />

                    }
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"
                                    {
                                    ...register("email",
                                        { required: true })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"
                                    {
                                    ...register("password",
                                        { required: true })
                                    } autoComplete="on" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>
                        <h2>{error}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn