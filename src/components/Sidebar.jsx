// Sidebar.js
import React from 'react'
import { Link } from 'react-router-dom'
import { FaWindowClose } from "react-icons/fa";

function Sidebar({open, setOpen}) {
  return (
    <div className={open ? "sidebar active" : "sidebar"}>
      <div className='closebar' onClick={() => setOpen(false)}>
         <FaWindowClose />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buy">Buy</Link></li>
          <li><Link to="/rent">Rent</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar