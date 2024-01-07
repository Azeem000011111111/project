import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='h-[3.375rem] bg-[#EA5251] justify-center items-center grid grid-cols-2'>
            <div className='text-center'>
                <h1>©2023 Guess This Word. All Rights Reserved.</h1>
            </div>
            <div className='flex justify-evenly'>
                <ul className='flex justify-center items-center text-center space-x-[0.62rem] list-disc list-marker-blue '>
                    <li >Privacy Policy</li>
                    <li >New Game</li>
                    <li >About</li>
                    <li >FeedBack</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer