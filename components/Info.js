import React from "react"
import ReactDOM from "react-dom"

export default function Info() {
    return(
        <div>
            <img src = './images/avatar.svg' className = 'pic' alt = "Profile picture" />
            <h1 className = 'name'>Saju Vijayakanthan</h1>
            <p className = 'position'>FullStack developer</p>
            <p className = 'link'><a href = 'https://saju-vijayakanthan.com/'> saju-vijayakanthan.com </a></p>
            <div className = 'bSection'><button type = "button" className = "button b1"> <img src = './icons/Mail.svg' />Email </button>
                <button type = "button" className = "button b2"> <img src = './icons/linkedin.svg' />LinkedIn </button>
            </div>
        </div>
    )
}

