import React from 'react'
import Text from './Text'
import "../assets/styles/post.css"

import img from "../assets/images/img.jpg"
import { Link } from 'react-router-dom'
import { colors } from '../theme/colors'

export default function Post({post}) {
    let imgUrl = img;
    console.log(post.image)
    if(post?.image){
        imgUrl = post.image;
    }
    return (
        <div className='post-card'>
            <div className='img-container' style={{ margin: '10px' }}>
                <img src={imgUrl} style={{ width: "200px", height: "200px", borderRadius: "50%" }} />
            </div>
            <div className='px-4'>
                <Text preset='title'>
                    {post.title}
                </Text>
                <div style={{color:"#bfbfbf", fontFamily:"Poppins, Arial, serif"}} className="my-2">
                    <span className='me-2'><i className="fa-solid fa-calendar-days p-1"></i>calendar</span>
                    <span className='me-2'><i className="fa-solid fa-folder p-1"></i>
                    {
                        post?.category ? post.category : "null"
                    }
                    </span>
                    <span className='me-2'><i className="fa-solid fa-comment p-1"></i>Comment(10)</span>
                </div>
                <Text> 
                    {
                        post.description.slice(0, 200)
                    }...
                </Text>
                <Link to={`/details/${post.token}`} style={{color:colors.bgBtn}}>Read more</Link>
            </div>
        </div>
    )
}
