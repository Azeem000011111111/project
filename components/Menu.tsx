import React from 'react'
import Keyboard3 from './Keyboard3'

const Menu = () => {
  return (
    <div>
        <div className='flex justify-center text-center flex-col w-[59.25rem] mt-4 '>
            <h1 className='text-[1.625rem] text-[#FF6347] pb-3'>How to play</h1>
            <h2 className='text-[40px] text-[#2F4F4F] pb-3'>How to play the Wordle Game?</h2>
            <p className='text-[1rem] text-[#545454]'>Start with Any Five-Letter Word: Kick off your Wordle adventure by typing in any five-letter word. This is your first step towards unraveling the word puzzle.</p>

        </div>
    <div className='flex justify-center text-center flex-col w-[59.25rem] mt-4 rounded-[1.375rem] bg-[#FF7F504A] p-6'>
            <h1 className='text-[1.125rem] text-[#FF7F50]'>Uncover Letter Clues</h1>
            <p>After entering your word, pay attention to the color-coded hints. 
Letters highlighted in yellow indicate they are part of the hidden word but are placed in a different spot. 
If a letter turns green, you&apos;ve got both the letter and its position correct. A gray letter means its not in the target word at all.</p>
        </div>
            <div className='flex justify-center text-center flex-col w-[59.25rem] mt-4 p-5 bg-[#FF7F504A] rounded-[1.375rem]'>
        <h1 className='text-[#FF7F50] text-[1.125rem] pt-3'>Strategize Your Next Move</h1>
        <p className='text-[#545454] text-[1rem] pt-3'>With each guess, you&apos;ll gather more information. Use the green and yellow hints to refine your next word choice. The goal is to use these insights to correctly guess the Wordle game&apos;s hidden word within your remaining attempts.</p>
        <div className='flex justify-center text-center  w-full mt-4 p-5 '>
            <Keyboard3 />
        </div>

        </div>

        <div className='flex justify-center text-center flex-col w-[59.25rem] mt-4 rounded-[1.375rem] bg-[#FF7F504A] p-6'>
        <h1 className='text-[1.125rem] text-[#FF7F50]'>Solve the Mystery Word</h1>
        <p className='text-[#545454] text-[1rem] pt-3'>
        Combine your knowledge of the correct letters (green) and the correct but misplaced ones (yellow) to deduce the secret word. Achieve this within six tries, and you&apos;ve conquered the Wordle challenge!
        </p>
        </div>

        
        
        

    </div>
  )
}

export default Menu