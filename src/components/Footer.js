import React from 'react'
import MyButton from './MyButton'
import Text from './Text'

export default function Footer() {
    return (
        <div className='my-5'>
            <div className="mb-4">
                <Text preset='title' style={{ fontSize: "24px", textTransform: "capitalize" }}>Subscribe for newsletter</Text>
                <form>
                    <div className="form-group d-flex">
                        <input type="text" className="form-control" placeholder="Enter Email Address" />

                    </div>
                </form>
            </div>
            <Text>
                Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://www.linkedin.com/in/abu-daud-hossain/" target="_blank">Abu Daud Hossaon</a>
            </Text>

        </div>
    )
}
