import React from 'react'
import { cn } from '../../utils'

const CustomButton = ({ label, onClick, disabled, styles, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative inline-block px-4 py-2 font-medium group cursor-pointer',
        styles && styles
      )}
    >
      <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
      <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
      <span className='relative text-black group-hover:text-white'>
        {label} {icon && icon}
      </span>
    </button>
  )
}

export default CustomButton
