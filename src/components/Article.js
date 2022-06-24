import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../theme/colors'
import Text from './Text'
import "../assets/styles/Article.css"

import img from "../assets/images/img.jpg"

export default function Article({ post }) {
    let imgUrl = img;
    console.log(post.image)
    if (post?.image) {
        imgUrl = post.image;
    }
    return (
        <Link to={`/details/${post.token}`} style={{ fontWeight: "0p", margin: 0, padding: 0 }}>
            <div className='article' style={{ margin: "0px 0" }}>
                <div className='img-container' >
                    <img src={imgUrl} style={{ width: "60px", height: "60px" }} />
                </div>
                <div className='px-4'>
                    <Text preset='sub-title' style={{ fontWeight: 700 }}>{post.title}</Text>
                    <div style={{ color: "#bfbfbf", fontFamily: "Poppins, Arial, serif", fontSize: "14px" }}>
                        <span className='me-2'><i className="fa-solid fa-calendar-days p-1"></i>calendar</span>
                        <span className='me-2'><i className="fa-solid fa-folder p-1"></i>
                            {
                                post?.category ? post.category : "null"
                            }
                        </span>
                        <span className='me-2'><i className="fa-solid fa-comment p-1"></i>Comment(10)</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
