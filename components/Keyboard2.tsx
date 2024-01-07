    import React from 'react';

    const Keyboard2 = () => {
        
        const keyboardLayout = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ];
        const keyboardLayout2 = [
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ];
        const keyboardLayout3 = [
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
        ];

        return (
            <div>
                <div className='justify-center flex gap-1 '>
                    {keyboardLayout.map((row, rowIndex) => (
                        <div key={rowIndex} className=''>
                            {row.map((letter) => (
                                <button
                                    className='w-[57px] h-[57px] m-[2px] rounded-[4px] mt-[10px]  bg-[#FF6347] text-[#F8F8FF] text-[1.77988rem] text-center'
                                    key={letter}
                                   
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                    {keyboardLayout2.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {row.map((letter) => (
                                <button
                                    className='bg-[#FF6347] text-[#F8F8FF] text-[1.77988rem] text-center'
                                    key={letter}
                                    style={{
                                        width: '57px',
                                        height: '57px',
                                        margin: '2px',
                                        borderRadius: '4px',
                                    }}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                    <button
                        className='bg-[#FF6347] ml-6 text-[#F8F8FF] text-[1.77988rem] text-center'
                        style={{
                            width: '116px',
                            height: '58px',
                            margin: '2px',
                            borderRadius: '4px',
                        }}
                    >
                        Enter
                    </button>

                    {keyboardLayout3.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {row.map((letter) => (
                                <button
                                    className='bg-[#FF6347] text-[#F8F8FF] text-[1.77988rem] text-center'
                                    key={letter}
                                    style={{
                                        width: '57px',
                                        height: '57px',
                                        margin: '2px',
                                        borderRadius: '4px',
                                    }}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    ))}

                    <button
                        className='bg-[#FF6347] text-[1.77988rem] text-[#F8F8FF] text-center'
                        style={{
                            width: '116px',
                            height: '58px',
                            margin: '2px',
                            borderRadius: '4px',
                        }}
                    >
                        <svg
                            className='inline-block'
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                        >
                            <path
                                d='M6.20537 9.27423L14.7654 4.99423C20.5154 2.11423 22.8754 4.47423 19.9954 10.2242L19.1254 11.9642C18.8754 12.4742 18.8754 13.0642 19.1254 13.5742L19.9954 15.3042C22.8754 21.0542 20.5254 23.4142 14.7654 20.5342L6.20537 16.2542C2.36537 14.3342 2.36537 11.1942 6.20537 9.27423ZM9.43537 13.5142H14.8354C15.2454 13.5142 15.5854 13.1742 15.5854 12.7642C15.5854 12.3542 15.2454 12.0142 14.8354 12.0142H9.43537C9.02537 12.0142 8.68537 12.3542 8.68537 12.7642C8.68537 13.1742 9.02537 13.5142 9.43537 13.5142Z'
                                fill='#F8F8FF'
                            />
                            Delte
                        </svg>
                        Delete
                    </button>
                </div>
            </div>
        );
    };


    export default Keyboard2;
