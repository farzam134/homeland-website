import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Sidebar from '../components/Sidebar';


function Header() {

    const[open, setOpen] = useState(false);

    return (
        <header>

            <h1>Homeland<span>.</span></h1>

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

            <div className='bars' onClick={() => setOpen(true)}>
               <FaBars /> 
            </div>

            <Sidebar open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header