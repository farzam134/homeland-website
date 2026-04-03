import React from 'react'
import img2 from "../assets/bg_2.jpg";

function Banner({ heading }) {
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ color: 'white', fontSize: '2rem', textAlign:'center'}}>
        {heading}
      </h2>
    </div>
  )
}

export default Banner