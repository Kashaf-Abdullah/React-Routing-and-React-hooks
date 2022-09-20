import React from 'react'
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div>
      about
       <header>
            <a>Logo</a>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Conatct</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default About
