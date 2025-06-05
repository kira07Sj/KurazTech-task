import React from 'react'

const Button = ({onClick, btnName}) => {
  return (
    <button className='w-[100px] flex items-center justify-center'><h4 className=' p-2 rounded-md bg-purple-700 text-[16px] text-white font-bold'>{btnName}</h4></button>
  )
}

export default Button