import React from 'react'
import DonateNavbar from './_components/donate-navbar'

const Layout = (
    { children }: { children: React.ReactNode }
) => {
  return (
    <>
    <DonateNavbar />
    <div className='w-full'>
    {children}
    </div>
    </>
  )
}

export default Layout