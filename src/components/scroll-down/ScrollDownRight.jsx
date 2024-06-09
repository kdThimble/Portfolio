import React from 'react'
import './index.css'
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const ScrollDownRight = () => {
  return (
    <div className='scroll-down'>
        <span className='scroll-text'>scroll down</span>
        <span className='my-2'><i class="fa-solid fa-arrow-down"><HiOutlineArrowNarrowDown className='' size={25}/></i></span>
    </div>
  )
}

export default ScrollDownRight