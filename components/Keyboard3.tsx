import React from 'react';
  const itemsArray = [
        {
            text: "C"
        },
       
        {
            text: "H"
        },
        {
            text: "A"
        },
        {
            text: "I"
        },
        {
            text: "N"
        },
        {
            text: "B"
        },
        {
            text: "R"
        },
        {
            text: "E"
        },
        {
            text: "A"
        },
        {
            text: "K"
        },
        {
            text: "D"
        },
        {
            text: "A"
        },
        {
            text: "I"
        },
        {
            text: "L"
        },
        {
            text: "Y"
        },
        
        
    ];
const Keyboard3 = () => {
    
    
    return (
        <div className=' max-w-[26.2rem] max-h-[15.5rem] '>
           
              <div className='flex flex-wrap gap-[1.08rem]'>
                {itemsArray.map((item,index)=>(
                  <div
                  key={index}
                  className='bg-white border border-[rgba(0,0,0,0.10)] shadow shadow-[rgba(0,0,0,0.10)] rounded-[1.25rem] min-w-[4.375rem] min-h-[4.375rem] flex justify-center items-center'
                  >
                    <span className='uppercase font-semibold text-[2.1875rem]'>
                        {item.text}
                    </span>


                  </div>
                
                ))}

              </div>

               

            
        </div>
        
    );
};



// Rest of the code...

export default Keyboard3;
