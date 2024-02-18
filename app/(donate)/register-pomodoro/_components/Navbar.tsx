import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4'>
        <UserButton/>
    </div>
  )
}

export default Navbar