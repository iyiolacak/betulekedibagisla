import React from 'react'
import { FaCat } from "react-icons/fa";
interface BalanceProps {
  balance: string;
  className?: string;
}
const Balance = ({ balance, className }: BalanceProps) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
        <div className='flex w-full px-2 bg-pink-100 rounded-full items-center '>
        <h1 className='text-xl font-semibold text-slate-800'>{balance}</h1>
        <FaCat size={20} className='ml-0.5 mt-0.5 text-tertiary' />
        </div>
    </div>
  )
}

export default Balance