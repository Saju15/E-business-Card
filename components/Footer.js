import React from "react"
import ReactDOM from "react-dom"

export default function Footer() {
    return(
        <div className = 'icons'>
            <footer>
                    <a className = 'icons ' href = 'https://www.facebook.com/'><img src = './icons/facebook.svg' /></a>
                    <a className = 'icons' href = 'https://www.instagram.com/'><img src = './icons/insta.svg' /></a>
                    <a className = 'icons' href = 'https://twitter.com/'><img src = './icons/twitter.svg' /></a>
                    <a className = 'icons' href = 'https://github.com/Saju15'><img src = './icons/github.svg' /></a>
            </footer>
        </div>
    )
}