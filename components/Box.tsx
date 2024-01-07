import React from 'react'

const Box = () => {
    return (
         
            <div className='relative w-full p-14 flex justify-center bg-white'>
                <div className=' flex justify-center items-center flex-shrink-0 bg-[#FFF] rounded-[1.25rem] max-w-[71.25rem] border-t-[3px] border-blue-400 py-8 shadow-[0px_7px_14px_rgba(0,_0,_0,_0.1)]'>
                <div className='flex flex-wrap justify-center max-w-[68.3125rem]'>
                    <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                            <div className='flex items-center flex-col justify-center p-[0.625rem]  min-h-[5.125rem] gap-[0.3125rem]'>
                                <h1 className='text-[1.25rem] text-[#545454] text-center'>Username</h1>
                                <p className='text-[1.125] text-center text-[#777]'>User not logged in</p>
                            </div>
                            </div>
                            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                             <div className='flex items-center flex-col  justify-center p-[0.625rem]  min-h-[5.125rem] gap-[0.3125rem]'>
                                <h1 className='text-[1.25rem] text-[#545454] text-center'>Game ID</h1>
                                <p className='text-[1.125] text-center text-[#777]'>6576faaa7aceda167d40fd66</p>
                            </div>
                            </div>
                            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                            <div className=' flex items-center flex-col justify-center p-[0.625rem]  min-h-[5.125rem] gap-[0.3125rem]'>
                                <h1 className='text-[1.25rem] text-[#545454] text-center'>Player ID</h1>
                                <p className='text-[1.125] text-center text-[#777]'>6576faa9e36902e5ec90852d</p>
                            </div>
                            </div>
                            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                            <div className=' flex items-center flex-col justify-center p-[0.625rem]  min-h-[5.125rem] gap-[0.3125rem]'>
                                <h1 className='text-[1.25rem] text-[#545454] text-center'>Guesses</h1>
                                <p className='text-[1.125] text-center text-[#777]'></p>
                            </div>
                            </div>
                            <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
                            <div className='pflex items-center flex-col  justify-center p-[0.625rem] min-h-[5.125rem] gap-[0.3125rem]'>
                                <h1 className='text-[1.25rem] text-[#545454] text-center'>Timer</h1>
                                <p className='text-[1.125] text-center text-[#777]'>00:27:06:152</p>
                            </div>
                            </div>
                </div>
                    

 
                <div className='w-[15rem] h-[3.9375rem] flex-shrink-0 rounded-[5.625rem] absolute top-6 bg-blue-400 text-[1.77988rem] text-center'>
                        <p className='text-white pt-2'>Your Score</p>
                </div>
           
    </div>




</div>

        )
}

export default Box