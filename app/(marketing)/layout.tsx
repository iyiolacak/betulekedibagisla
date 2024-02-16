import NavBar from '@/components/NavBar'
import React from 'react'

const LandingLayout = (
    {children}: { children: React.ReactNode }
) => {
  return (
    <>
    <NavBar/>
    {children}
    </>
  )
}

export default LandingLayout