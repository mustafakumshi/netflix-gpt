import React from 'react'
import Netflix_Logo from "../assets/images/movies-logo.png"

const Header = () => {
  return (
    <div className='logo absolute p-8 bg-gradient-to-b from-black z-10'>
      <img className="w-44" src={Netflix_Logo} alt="logo" />
    </div>
  )
}

export default Header;
