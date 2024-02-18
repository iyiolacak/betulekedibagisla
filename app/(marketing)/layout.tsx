"use client";
import NavBar from '@/components/NavBar'
import React, { Suspense } from 'react'
import Footer from './_components/Footer'

const LandingLayout = (
    {children}: { children: React.ReactNode }
) => {
  return (
    <>
    <div className=''>
    <NavBar/>
    </div>
    <div className='w-full h-full'>
    {children}
    </div>
    <Footer />
    </>
  )
}

export default LandingLayout