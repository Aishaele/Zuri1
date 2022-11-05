import React from 'react'
import foo from "./footerimg.svg"


const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <h3>Zuri<span className="dot">.</span>Internship</h3>
            <h4> HNG Internship 9 Frontend Task</h4>
            <img src={foo} alt=""/>
        </footer>
    </div>
  )
}

export default Footer