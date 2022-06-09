import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/images/img.jpg"
import Text from '../../components/Text'
import { colors } from '../../theme/colors'

export default function Details() {
  return (
    <div className=''>
      <div className='mb-5' style={{ margin: '10px' , justifyContent: "center", display:"flex"}}>
        <img className='img-fluid' src={img} style={{ width: "96%", height: "400px", padding: '20px'}} />
      </div>
      <div className='p-4'>
        <Text preset='title'>This is thitle</Text>
        <div style={{ color: "#bfbfbf", fontFamily: "Poppins, Arial, serif" }} className="my-2">
          <span className='me-2'><i className="fa-solid fa-calendar-days p-1"></i>calendar</span>
          <span className='me-2'><i className="fa-solid fa-folder p-1"></i>Travel</span>
          <span className='me-2'><i className="fa-solid fa-comment p-1"></i>Comment(10)</span>
        </div>
        <Text style={{marginTop: '40px'}}> Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.

        </Text>
        
      </div>
    </div>
  )
}
