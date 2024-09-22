import React from 'react'
import { ArrowDown } from 'lucide-react';

function LandingPage() {
  return (
    <div>
    <div className='mt-8 p-4  flex justify-center items-center'>
       <p className=' text-orange-300 font-extrabold font-mono text-xl lg:text-5xl sm:text-2xl md:text-3xl'>Explore front-end components to streamline your development</p>
    </div>
    
    <div className='mt-4 flex justify-center items-center'>
       <button className='bg-green-800 font-mono p-4 font-medium lg:font-extrabold md:font-extrabold  sm:font-extrabold w-32 sm:w-42 md:w-56 lg:w-80 text-white rounded sm:rounded-sm md:rounded-md lg:rounded-lg hover:bg-green-300 hover:text-black shadow-md shadow-black '>Browse Components</button>
    </div> 

    <div className='overflow-hidden mt-8 p-16 flex flex-col justify-start items-center h-[550px] bg-white rounded sm:rounded-sm md:rounded-md lg:rounded-lg'>
        <p className=' text-blue-950 font-extrabold font-mono text-sm lg:text-5xl sm:text-2xl md:text-3xl  '>Projects Made Using This</p>   
         <div className=' overflow-hidden mt-10 flex flex-col justify-center sm:flex-row md:fles-col gap-2 lg:gap-16 md:gap-4'>
             <div className=' lg:hover:h-[328px] lg:hover:w-[328px] hover:h-44 hover:w-44 sm:hover:h-56 sm:hover:w-56 md:hover:h-72 md:hover:w-72 bg-gray-400 h-40 sm:h-52 md:h-64 lg:h-80 w-40 sm:w-52 md:w-64 lg:w-80 flex justify-center text-center items-center rounded sm:rounded-sm md:rounded-md lg:rounded-lg border border-slate-900 shadow-inner shadow-black'> <button> Box1</button> </div>
             <div className='lg:hover:h-[328px] lg:hover:w-[328px] hover:h-44 hover:w-44 sm:hover:h-56 sm:hover:w-56 md:hover:h-72 md:hover:w-72 bg-gray-400 h-40 sm:h-52 md:h-64 lg:h-80 w-40 sm:w-52 md:w-64 lg:w-80 flex justify-center text-center items-center rounded sm:rounded-sm md:rounded-md lg:rounded-lg border border-slate-900  shadow-black shadow-inner '><button>Box2</button></div>

         </div>
    </div> 

    
    
    
    <footer className='font-mono mt-2 rounded sm:rounded-sm md:rounded-md lg:rounded-lg bg-black text-white flex justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 p-4'>
        <button>About</button>
        <button>Contact</button>
        <button>Follow</button>
      </footer>  
    
    </div>
    )
}

export default LandingPage