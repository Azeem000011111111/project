import React from 'react'
import Image from 'next/image'
import Cube from './Cube'
import Svg from './Svg'
import List from './List'

const LeaderBoard = () => {
  return (
    <div className="flex justify-center
     bg-white  w-full h-[739px] ">
       <div className='w-[948px] h-[739px] bg-white'>
        <div className='flex justify-center flex-col text-center '>
        <h1 className='text-[#FF6347] text-[26px] font-normal font-[poppins] mb-2'>Leader board</h1>
        <h1 className='text-[#2F4F4F] font-bold text-[40px] leading-[51px]'>Our Top 10 Winners</h1>
        </div>
        {/* <div className='grid grid-cols-2 h-auto'>
          <div className='col-span-1'>
            <div className='w-auto h-auto'>
            <Svg />
            </div>
            </div>
          <div className='col-span-1'>
          <Image src={"/Frame 41.png"} alt='leaderboard' width={467} height={525}/>  
                
                
            
            
          </div>
        </div> */}

<section className="py-10">
            <div className="max-w-[71.6875rem] mx-auto px-6 lg:px-0 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  ">
                    <div className="col relative">
                        <div className="flex items-end">
                            <div className="box-cube-1 translate-y-3 -mr-16 relative z-30">
                                <div className="box-content text-center sm:max-w-[7.5rem] sm:mb-4">
                                    <div
                                        className="mx-auto relative w-16 h-16 flex items-center justify-center rounded-full bg-[#6495ED] border-4 border-white shadow shadow-gray-400">
                                        <span
                                            className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center h-7 w-7 bg-white rounded-full shadow">
                                            <span className="text-sm text-[#6495ED] font-bold">
                                                3
                                            </span>
                                        </span>
                                        <span className="mt-3 text-gray-100 text-2xl font-bold uppercase">TH</span>
                                    </div>
                                    <div className="hidden sm:block">
                                        <h5
                                            className="mt-3 text-lg font-semibold capitalize text-[rgba(0, 0, 0, 0.25)] line-clamp-1">
                                            Teresa Harper
                                        </h5>
                                        <div className="mt-1 flex gap-3 items-center justify-center">
                                            <div className="w-6 h-6 rounded-full">
                                                <img className="block w-full h-full rounded-full object-cover"
                                                    src="/united states.svg" alt="flag-logo" />
                                            </div>
                                            <span className="text-[#777] text-sm font-semibold">
                                                420
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <svg className="w-full" height="153" viewBox="0 0 236 153" fill="none">
                                    <path d="M113.384 152.298L0.278198 143.584V5.70605L113.384 13.2213V152.298Z"
                                        fill="url(#paint0_linear_1_3063)" />
                                    <path d="M235.089 142.085L113.384 152.297V13.2206L235.089 6.53906V142.085Z"
                                        fill="url(#paint1_linear_1_3063)" />
                                    <path
                                        d="M0.278198 5.70566L113.729 0.541992L235.089 6.53945L113.384 13.2209L0.278198 5.70566Z"
                                        fill="url(#paint2_linear_1_3063)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_3063" x1="420.505" y1="12.6056" x2="181.664"
                                            y2="218.621" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FDDAD4" />
                                            <stop offset="0.9964" stop-color="#FF6347" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_3063" x1="117.159" y1="53.8528" x2="144.304"
                                            y2="195.359" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F89E8D" />
                                            <stop offset="0.9964" stop-color="#FF6347" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_3063" x1="49.5" y1="-33.0004" x2="120.232"
                                            y2="10.3047" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F89D8C" />
                                            <stop offset="0.9964" stop-color="#FF765E" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="box-cube-2 translate-y-1 -mr-10 relative z-20">
                                <div className="box-content text-center sm:max-w-[12.5rem] sm:mb-4">
                                    <div
                                        className="mx-auto relative w-16 h-16 flex items-center justify-center rounded-full bg-[#6495ED] border-4 border-white shadow shadow-gray-400">
                                        <span
                                            className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center h-7 w-7 bg-white rounded-full shadow">
                                            <span className="text-sm text-[#6495ED] font-bold">
                                                2
                                            </span>
                                        </span>
                                        <span className="mt-3 text-gray-100 text-2xl font-bold uppercase">TH</span>
                                    </div>
                                    <div className="hidden sm:block">
                                        <h5
                                            className="mt-3 text-lg font-semibold capitalize text-[rgba(0, 0, 0, 0.25)] line-clamp-1">
                                            Teresa Harper
                                        </h5>
                                        <div className="mt-1 flex gap-3 items-center justify-center">
                                            <div className="w-6 h-6 rounded-full">
                                                <img className="block w-full h-full rounded-full object-cover"
                                                    src="/united states.svg" alt="flag-logo" />
                                            </div>
                                            <span className="text-[#777] text-sm font-semibold">
                                                420
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <svg className="w-full" height="233" viewBox="0 0 222 233" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M118.463 232.223L0.38623 224.682V4.86798L118.463 8.26627V232.223Z"
                                        fill="url(#paint0_linear_1_3059)" />
                                    <path d="M118.463 232.223L0.38623 224.682V4.86798L118.463 8.26627V232.223Z"
                                        fill="url(#paint1_linear_1_3059)" fill-opacity="0.3" />
                                    <path d="M221.747 223.427L118.464 232.223V8.26626L221.747 6.10785V223.427Z"
                                        fill="url(#paint2_linear_1_3059)" />
                                    <path
                                        d="M0.38623 4.86796L112.691 -0.00256348L221.747 6.10784L117.233 9.97951L0.38623 4.86796Z"
                                        fill="url(#paint3_linear_1_3059)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_3059" x1="439.086" y1="15.5688" x2="113.865"
                                            y2="204.393" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FDDAD4" />
                                            <stop offset="0.9964" stop-color="#FF6347" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_3059" x1="59.4249" y1="4.86798" x2="59.4249"
                                            y2="232.223" gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_3059" x1="121.667" y1="79.5059" x2="192.739"
                                            y2="282.18" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F89E8D" />
                                            <stop offset="0.9964" stop-color="#FF6347" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_1_3059" x1="166.5" y1="10" x2="42"
                                            y2="3.02483e-06" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF6347" />
                                            <stop offset="1" stop-color="#F89E8D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="box-cube-3 relative z-10">
                                <div className="box-content text-center sm:mb-4">
                                    <div
                                        className="mx-auto relative w-16 h-16 flex items-center justify-center rounded-full bg-[#6495ED] border-4 border-white shadow shadow-gray-400">
                                        <span
                                            className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center h-7 w-7 bg-white rounded-full shadow">
                                            <span className="text-sm text-[#6495ED] font-bold">
                                                1
                                            </span>
                                        </span>
                                        <span className="mt-3 text-gray-100 text-2xl font-bold uppercase">TH</span>
                                    </div>
                                    <div className="hidden sm:block">
                                        <h5
                                            className="mt-3 text-lg font-semibold capitalize text-[rgba(0, 0, 0, 0.25)] line-clamp-1">
                                            Teresa Harper
                                        </h5>
                                        <div className="mt-1 flex gap-3 items-center justify-center">
                                            <div className="w-6 h-6 rounded-full">
                                                <img className="block w-full h-full rounded-full object-cover"
                                                    src="/united states.svg" alt="flag-logo" />
                                            </div>
                                            <span className="text-[#777] text-sm font-semibold">
                                                420
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <svg className="w-full" height="326" viewBox="0 0 212 326" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M122.486 325.318L0.182983 319.812V4.16952L122.486 0.710449V325.318Z"
                                        fill="url(#paint0_linear_1_3056)" />
                                    <path d="M122.486 325.318L0.182983 319.812V4.16952L122.486 0.710449V325.318Z"
                                        fill="url(#paint1_linear_1_3056)" fill-opacity="0.3" />
                                    <path d="M211.233 318.726L122.486 325.318V0.710449L211.233 5.78073V318.726Z"
                                        fill="url(#paint2_linear_1_3056)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_3056" x1="454.581" y1="15.9886" x2="72.0362"
                                            y2="177.118" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FDDAD4" />
                                            <stop offset="0.9964" stop-color="#FF6347" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_3056" x1="61.3343" y1="0.710449"
                                            x2="61.3343" y2="325.318" gradientUnits="userSpaceOnUse">
                                            <stop stop-opacity="0" />
                                            <stop offset="1" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_3056" x1="125.238" y1="106.08" x2="267.748"
                                            y2="349.322" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F89E8D" />
                                            <stop offset="0.9964" stop-color="#FF6347" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='absolute bottom-1 right-2 z-40 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="170" height="171" viewBox="0 0 170 171" fill="none">
                <path d="M45.9952 91.7684C42.0976 68.647 57.0197 48.6546 79.3313 47.734C101.532 46.8176 121.719 65.1901 124.449 88.1594C127.103 110.484 112.203 128.982 91.1501 130.046C69.9952 131.115 49.7822 114.234 45.9952 91.7684Z" fill="#FFD700"/>
                            <path d="M0.595013 88.0682L2.77171 99.1317C3.4054 102.348 6.43278 104.827 9.53397 104.682L15.1743 104.417C16.8649 109.587 19.0437 114.521 21.6414 119.163L17.5311 122.116C15.1765 123.808 14.9334 127.299 16.9733 129.91L23.8745 138.732C25.8819 141.299 33.1607 142.821 35.498 141.168L35.5913 137.635C39.3804 141.438 43.5016 144.849 47.8789 147.815L46.2122 152.106C45.1748 154.775 46.6397 158.03 49.4718 159.38L59.077 163.955C61.8787 165.291 70.1428 165.497 71.2105 162.87L67.6969 157.541C72.5082 159.093 77.4714 160.149 82.5149 160.655L83.1964 165.137C83.6413 168.064 86.3713 170.298 89.2946 170.142L99.2427 169.603C102.157 169.445 104.193 166.956 103.787 164.034L103.166 159.558C107.962 158.531 112.511 156.979 116.763 154.955L119.521 158.772C121.303 161.239 130.003 162.503 132.349 160.904L134.988 154.864C137.344 153.252 137.833 149.928 136.073 147.429L133.241 143.409C136.63 140.074 139.643 136.333 142.217 132.25L146.717 134.541C149.43 135.922 156.985 136.628 158.191 133.938L157.92 122.915C159.137 120.184 157.918 116.814 155.186 115.394L150.407 112.909C151.587 108.147 152.282 103.144 152.442 97.9591L157.92 97.7007C160.928 97.5596 163.122 94.8778 162.82 91.6967L161.783 80.7636C161.475 77.526 158.753 75.0049 155.702 75.1417L149.819 75.4045C148.451 70.2408 146.585 65.2531 144.274 60.4998L149.27 56.9538C151.781 55.1711 152.33 51.4297 150.489 48.5851L150.038 37.12C148.174 34.2212 138.707 35.042 136.173 36.8638L130.877 40.6681C127.275 36.6857 123.31 33.0573 119.046 29.8501L121.691 23.2728C122.93 20.1916 121.539 16.3481 118.572 14.6978L113.542 8.19878C110.543 6.52678 101.968 8.55053 100.753 11.6839L98.099 18.5174C93.2617 16.7955 88.2529 15.5686 83.1421 14.9063L82.0527 7.04574C81.5579 3.47157 78.5218 0.659569 75.2731 0.778997L64.1813 1.18723C60.9216 1.30666 58.7233 4.31843 59.268 7.89912L60.4659 15.7749C55.5744 16.8215 50.9388 18.424 46.6115 20.5086L47.2278 12.2442C45.1032 9.21284 36.0492 9.96849 33.5231 11.8598L24.9444 18.2872C22.4357 20.1655 22.1601 24.1132 24.3151 27.0924L28.9072 33.4438C25.5521 36.9876 22.6137 40.9331 20.144 45.2108L19.545 41.2045C16.4417 39.5889 7.18368 41.4021 6.13331 44.4551L2.58076 54.7889C1.54558 57.7985 3.21225 61.5052 6.2939 63.073L12.4138 66.1868C11.4719 71.1485 11.0466 76.3078 11.1812 81.5996L5.11986 81.871C1.97961 82.0143 -0.0495303 84.7916 0.595013 88.0682ZM28.7053 93.5055C22.9674 61.5681 43.3714 33.6675 74.3659 32.3755C105.222 31.09 133.102 56.7627 136.637 88.5416C140.036 119.1 119.516 144.18 90.8158 145.615C61.9915 147.059 34.2219 124.205 28.7053 93.5055Z" fill="#FFD700"/>
                 <path d="M7.6654 87.9727L9.79218 99.0383C10.4107 102.256 13.4272 104.736 16.5306 104.589L22.1731 104.324C23.8419 109.494 25.9991 114.429 28.5751 119.072L24.4518 122.025C22.0906 123.717 21.8301 127.208 23.8592 129.818L30.7214 138.643C32.7179 141.21 36.2249 141.944 38.5666 140.289L42.4447 137.546C46.2165 141.349 50.3246 144.76 54.6866 147.726L53.0004 152.017C51.9522 154.686 53.4019 157.941 56.2297 159.291L65.8153 163.869C68.6127 165.204 71.7399 164.157 72.8098 161.526L74.4657 157.454C79.2705 159.007 84.2293 160.062 89.2706 160.568L89.9326 165.052C90.3644 167.979 93.0858 170.216 96.0091 170.057L105.961 169.519C108.878 169.36 110.923 166.872 110.532 163.949L109.933 159.474C114.733 158.446 119.289 156.894 123.551 154.87L126.294 158.687C128.065 161.154 131.398 161.851 133.748 160.251L141.78 154.779C144.144 153.168 144.647 149.843 142.898 147.344L140.083 143.325C143.488 139.987 146.516 136.246 149.109 132.163L153.599 134.454C156.305 135.835 159.476 134.774 160.689 132.079L164.851 122.829C166.082 120.097 164.875 116.727 162.15 115.307L157.382 112.823C158.582 108.061 159.3 103.055 159.485 97.8701L164.964 97.6117C167.972 97.4705 170.179 94.7867 169.891 91.6077L168.901 80.6724C168.608 77.4348 165.897 74.9116 162.844 75.0484L156.958 75.3111C155.613 70.1475 153.768 65.1575 151.481 60.4043L156.494 56.8583C159.012 55.0756 159.58 51.332 157.751 48.4896L151.466 38.7117C149.606 35.8172 146.027 34.9443 143.486 36.7639L138.176 40.5683C134.59 36.5837 130.641 32.9574 126.392 29.7502L129.065 23.173C130.32 20.0896 128.944 16.2483 125.986 14.5958L115.838 8.93274C112.843 7.26074 109.41 8.45067 108.179 11.5819L105.495 18.4153C100.664 16.6934 95.6618 15.4666 90.5532 14.8043L89.5007 6.94153C89.0211 3.36518 85.998 0.553184 82.7492 0.672613L71.6553 1.08084C68.3957 1.20027 66.1821 4.21205 66.7116 7.79491L67.8748 15.6707C62.9767 16.7173 58.3369 18.3198 53.9965 20.4044L49.3806 13.8119C47.2625 10.7871 43.482 9.86211 40.9472 11.7556L32.3403 18.1852C29.8229 20.0635 29.5299 24.0111 31.6719 26.9925L36.238 33.3461C32.8655 36.8899 29.9097 40.8375 27.4227 45.1152L20.9599 41.7495C17.8609 40.134 14.4754 41.3065 13.412 44.3596L9.81385 54.6934C8.76566 57.703 10.4172 61.4096 13.4902 62.9774L19.597 66.0934C18.6313 71.0551 18.1843 76.2166 18.2949 81.5084L12.2336 81.7798C9.0782 81.9188 7.03605 84.6982 7.6654 87.9727ZM33.471 93.5164C27.5833 60.198 48.9726 31.0401 81.3386 29.6894C113.561 28.3453 142.518 55.1776 146.01 88.3419C149.363 120.177 127.846 146.269 97.96 147.761C67.953 149.261 39.12 125.493 33.471 93.5164Z" fill="#F0E68C"/>
                    <path d="M50.4852 92.7346C46.6548 69.6415 61.6268 49.6752 83.9254 48.7545C106.113 47.8403 126.237 66.1889 128.902 89.1301C131.491 111.426 116.55 129.903 95.5055 130.965C74.3615 132.033 54.207 115.174 50.4852 92.7346Z" fill="#F0E68C"/>
                    </svg>
                    </div>
                    </div>
                    
                    <div className="col">
                        <div>
                            <List />

                        </div>
                    </div>
                </div>
                
            </div>
        </section>







        
        <div className='flex justify-center mt-4'>
       <button className='bg-[#228B22] p-4 rounded-xl'>View More</button>
        </div>


       </div>
       

    </div>
  )
}

export default LeaderBoard