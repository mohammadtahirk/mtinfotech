import Link from 'next/link'
import React from 'react'

const CallFreeBtn = ({className = ''}) => {
  return (
    <Link 
      href="tel:+916355744550" 
      className={`bg-white text-sm sm:text-base md:text-lg font-medium text-black py-3 px-6 rounded-full text-center inline-block align-middle transition-all duration-300 hover:bg-[#ffca9a] hover:shadow-lg active:scale-95 ${className}`}
    >
      Book a Free Call
    </Link>
  )
}

export default CallFreeBtn