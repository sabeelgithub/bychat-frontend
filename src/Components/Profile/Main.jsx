import React, { useEffect, useState } from 'react'
import Loaders from '../Loader/Loaders';

function Main() {
  const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setLoader(false)
        }, 600);
      }, [])
  return (
  
    <>
    {loader ? <Loaders/> : <div className="flex flex-col justify-center items-center h-full">
    <div className="relative flex flex-col items-center rounded-[20px] md:w-[1310px]  w-[400px] mx-auto pb-4  bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
      <div className="relative flex h-32 w-full justify-center rounded-xl ">
        <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png" className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" /> 
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png" alt />
        </div>
      </div> 
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Adela Parkson
        </h4>
        <p className="text-base font-normal text-gray-600">Product Manager</p>
        <p className="text-base font-normal text-gray-600">Product Manager</p>
        <p className="text-base font-normal text-gray-600">Product Manager</p>
      </div> 
      <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
       
       
        <div className="flex flex-col items-center justify-center">
        <button className='bg-blue-500 h-12 w-16 rounded-xl hover:bg-blue-700'>Edit</button>
        </div>
      </div>
    </div>  
  </div> }
    
    </>
  )
}

export default Main