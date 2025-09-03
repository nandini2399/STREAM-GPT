import React from 'react'
import logo from "../utils/logo.png"

const Header = () => {
  return (
    <div className='absolute w-screen px-2 py-1 bg-gradient-to-b from-red-300 z-10'>
      <img className='w-40' src={logo} alt='STEAM-GPT' />
    </div>
  )
}

export default Header