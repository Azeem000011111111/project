import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  } from "@/components/ui/menubar"

const Navbar = () => {
  return (
  <div className='  '>
    

    <div className=" flex flex-row items-center main-container w-full h-[69.71px] bg-[#fff] border-solid border-b border-b-[rgba(0,0,0,0.1)] relative shadow-[0_7px_24px_0_rgba(0,0,0,0.1)] mx-auto my-0">
                <div className="flex-1">
                <Image src="/donut.svg" width={42}  height={42} alt='lo' />
                </div>
                <div className="flex-none  ">
                    <ul className="flex  justify-evenly gap-x-4 menu menu-horizontal px-1">
                        <li><Link href="/"><Image src="/setting-1.svg" alt="Picture of the author" width={36} height={36} /></Link></li>
                        <li><Link href="/about"><Image src="/setting-2.svg" alt="Picture of the author" width={36} height={36} /></Link></li>
                        <li><Link href="/contact"><button className='rounded-full  bg-[#50C878] p-2 font-[14px] text-white'>New Game</button></Link></li>
                        <li><Link href="/blog"> <button className='rounded-full  bg-[#50C878] p-2 font-[14px] text-white'>Login</button></Link></li>
                        
                            
                        
                    </ul>
                </div>
                </div> 





   </div>






  )
}

export default Navbar