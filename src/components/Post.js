import React from 'react'
import Text from './Text'
import "../assets/styles/post.css"

import img from "../assets/images/img.jpg"
import { Link } from 'react-router-dom'
import { colors } from '../theme/colors'

export default function Post() {
    return (
        <div className='post-card'>
            <div className='img-container' style={{ margin: '10px' }}>
                <img src={img} style={{ width: "130px", height: "130px", borderRadius: 50 }} />
            </div>
            <div className='px-4'>
                <Text preset='title'>This is thitle</Text>
                <div style={{color:"#bfbfbf", fontFamily:"Poppins, Arial, serif"}} className="my-2">
                    <span className='me-2'><i className="fa-solid fa-calendar-days p-1"></i>calendar</span>
                    <span className='me-2'><i className="fa-solid fa-folder p-1"></i>Travel</span>
                    <span className='me-2'><i className="fa-solid fa-comment p-1"></i>Comment(10)</span>
                </div>
                <Text> Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                    
                </Text>
                <Link to="/details" style={{color:colors.bgBtn}}>Read more</Link>
            </div>
        </div>
    )
}
