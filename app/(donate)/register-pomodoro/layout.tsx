import React from 'react'
import Navbar from './_components/Navbar'

const RegisterPomodoroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default RegisterPomodoroLayout