import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'

const RegisterPomodoro = async () => {
  const user = await currentUser();
    return (
        <>
        <div className='flex flex-col p-4'>
            <h1 className='font-bold text-4xl'>
                Welcome, {user?.username}
            </h1>
            <p className='text-muted-foreground mt-2'>
                How many Pomodoro sessions you have done before? This will set your initial Kitty Cent balance.
            </p>
            <Link href={"/cats"}>tikla</Link>
        </div>
        </>
  )
}

export default RegisterPomodoro