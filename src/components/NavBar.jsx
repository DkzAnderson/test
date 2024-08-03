import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='flex flex-col gap-5 text-3xl '>
        <NavLink className='hover:underline' to={'test/home'}>
            Home
        </NavLink>
        <NavLink className='hover:underline' to={'test/contact'}>
            Contact
        </NavLink>
        <NavLink className='hover:underline' to={'test/about'}>
            About
        </NavLink>
    </div>
  )
}
