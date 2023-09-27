import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show,setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>600) {
                setShow(true)
                
            } else {
                setShow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-black'} nav`}>

        <img width={'150px'} src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="logo" />
        
    </div>
  )
}

export default Nav