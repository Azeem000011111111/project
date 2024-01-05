import Image from 'next/image'
import React from 'react'

const List = () => {
  return (
    <div>
        <div className='flex flex-col divide-y divide-black/10
'>
            {Array(6).fill(null).map((_, index) => (
                <div className='grid grid-cols-2 p-4' key={index}>
                    <div className='flex justify-start gap-x-4'>
                        <Image src={"/TH.png"} width={50} height={50} alt={"logo"} />
                        <span className='flex items-center text-lg'>
                            Teresa Harper
                        </span>
                    </div>
                    <div className='flex justify-end'>
                        <Image src={"/united states.svg"} width={20} height={20} alt={"logo"} />
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default List