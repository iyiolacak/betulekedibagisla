import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
        <div className='p-4 justify-between'>
        <Link href={"/"} className='text-xl font-bold'>
            betulekedibagisla
        </Link>
    </div>
  )
}

export default NavBar