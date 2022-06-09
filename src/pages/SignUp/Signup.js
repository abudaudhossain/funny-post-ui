import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import ServerInfo from '../../utils/ServerInfo';
import Text from '../../components/Text'

import "../../assets/styles/signup.css"
import userContext from '../../context/user/userContext';



const Signup = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [user, setUser] = useState({});
    const authUser = useContext(userContext);
    const { user, setUser } = authUser;


    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        setLoading(true)
        console.log(data)
        if (data.password !== data.rePass) {
            setError("Password and RePassword required to same")
            setLoading(false)
        } else {
            axios.post(`${ServerInfo.baseUrl}/newAccount`, data, ServerInfo.config)
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
                        setLoading(false)
                    }
                })
                .catch(error => {
                    setError(error.message);
                    console.error('There was an error!', error);
                    setLoading(false)
                });

        }


    };

    useEffect(() => {
        const user1 = localStorage.getItem('userInfo');
        setUser(user1);
        console.log(user);
      }, [user])


    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    {
                        loading && <Spinner animation="border" variant="secondary" style={{ display: 'flex', margin: "auto", width: '100px', height: "100px" }} />

                    }
                    {
                        error && <h3>{error}</h3>
                    }
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" {...register("name", { required: true })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" {...register("email", { required: true })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" {...register("password", { required: true })} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" {...register("rePass", { required: true })} />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup