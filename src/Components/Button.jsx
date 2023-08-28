import React from 'react'
import iconURL from '../../assets/icons/arrow-right.svg'

const Button = () => {
  return (
    <div>
         <button className=' flex justify-center items-center gap 2 px-7 py-4  mt-8 border font monserrat text-sm rounded-full bg-coral-red text-white border-coral-red '>Shop Now!
        <img src={iconURL} alt='icon arrow-right' className='ml-2 rounded-full w-5 h-5'/>
        </button>

        <div className=''>

        </div>
    </div>
   
  )
}

export default Button