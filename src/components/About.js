import React from 'react'
import About_img from '../images/about_img.png'

export default function About() {
    return (
        <div className="about">
            <div className="about-img"> 

            <img src={About_img} alt="" />
            <img src={About_img} alt="" />
            <img src={About_img} alt="" />


            </div>
            <div className="about-text">
                <h2>About Us</h2>
                <p>
                    Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit</p>
            </div>
        </div>
    )
}