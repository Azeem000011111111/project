import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='h-[3.375rem] bg-[#EA5251] justify-center items-center grid grid-cols-1 sm:grid-cols-2'>
                <div className='text-center'>
                    <h1 className='text-white'>©2023 Guess This Word. All Rights Reserved.</h1>
                </div>
                <div className='flex justify-center items-center text-center space-x-[0.62rem]'>
                    <ul className='flex flex-wrap justify-center items-center space-x-[0.62rem] list-disc list-marker-blue'>
                        <li className='text-white'>Privacy Policy</li>
                        <li className='text-white'>New Game</li>
                        <li className='text-white'>About</li>
                        <li className='text-white'>FeedBack</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
