import React from 'react'

const Woordle = () => {
  return (
    <section className='bg-[#FFEEDE] flex justify-center items-center  h-[382px] w-full'>
    <div className='flex justify-center  w-[948px] h-[50%]'>
        <div className='text-center '>
            <h1 className='text-[#FF6347] text-[26px] pb-2'>Wordle Game</h1>
            <h1 className='text-[#2F4F4F] text-4xl pb-2 '>Guess the Hidden Word</h1>
            <p className='text-[16px] text-[#545454]'>The rules are very simple: You need to guess the hidden word (from 4 to 11 letters) in 6 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 6 tries?</p>


        </div>
    </div>
    </section>
    
  )
}

export default Woordle