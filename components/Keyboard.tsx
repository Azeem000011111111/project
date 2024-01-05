import React from 'react';
  const itemsArray = [
        {
            text: "A"
        },
       
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        {
            text: ""
        },
        
    ];
const Keyboard = () => {
    
    
    return (
        <div className=' max-w-[419px] max-h-[475px] '>
           
              <div className='flex flex-wrap gap-3'>
                {itemsArray.map((item,index)=>(
                  <div
                  key={index}
                  className='bg-white border border-[rgba(0,0,0,0.10)] shadow shadow-[rgba(0,0,0,0.10)] rounded-[1.25rem] min-w-[4.375rem] min-h-[4.375rem] flex justify-center items-center'
                  >
                    <span className='uppercase font-semibold text-4xl'>
                        {item.text}
                    </span>


                  </div>
                
                ))}

              </div>

               

            
        </div>
        
    );
};



// Rest of the code...

export default Keyboard;
