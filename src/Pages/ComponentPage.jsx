import React from 'react';

function ComponentPage() {
    return (
        <>
            <div className='bg-slate-900 p-4 sticky top-0 z-50'>
                <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row text-white justify-between items-center'>
                    <div className='flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4'>
                    <img src="src\Assets\isohUI-removebg-preview.png" alt="logo"  className='h-32 w-32'/>
                        <div className='flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-green-200'>
                           <button className='p-2 rounded font-mono hover:text-blue-300'>Components</button>
                           <button className='p-2 rounded font-mono hover:text-blue-300'>Template</button>
                        </div>
                        
                    </div>
                    <div className='flex justify-end font-mono'>
                        <input 
                            type="text" 
                            placeholder='search component' 
                            className='p-3 border border-black text-black hover:border-gray-700 w-[200px] sm:w-[180px] md:w-[200px] lg:w-[300px] rounded sm:rounded-sm md:rounded-md lg:rounded-lg' 
                        />
                        <button 
                            className='bg-gray-600 ml-1 text-center w-13 sm:w-16 md:w-20 rounded sm:rounded-sm md:rounded-md lg:rounded-lg p-1 text-white hover:text-black hover:bg-white'
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComponentPage;
