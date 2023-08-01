import React, { useEffect, useState } from 'react'
import banner from '../Assets/banner-img.png'
import man from '../Assets/icon-1.png'
import Loaders from './Loader/Loaders'


function Home() {
  const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setLoader(false)
        }, 600);
      }, [])
  return (
    <>
    {loader ? <Loaders/>  : <div className='h-full w-full md:flex '>
    <div className='md:w-1/2'>
    <p className='font-bold text-3xl text-center mt-11'>Welcom to ByChat</p>
    <p className='text-center mt-5 m-9 font-serif' >Bychat is a Chat application,In which Users can communicate with their loved ones,Either in chat or video call</p>
    <div className='my-6 w-full h-full '>
    <div className=' md:ml-24 mt-3  flex '>
      <div className='rounded-full w-16 h-16 mt-3  ml-5 bg-gray-400 flex justify-center items-center'>
        <img src={man} alt="" className='h-8 w-8' />
        </div>
        <p className='mt-7 ml-7 font-mono'>Create/Login to Your Account</p>
    </div>
    <div className=' md:ml-24 mt-3  flex'>
      <div className='rounded-full w-16 h-16 mt-3 ml-5 bg-gray-400 flex justify-center items-center'>
        <img src={man} alt="" className='h-8 w-8' />
        </div>
        <p className='mt-7 ml-7 font-mono'>Add Members to Your Chat list</p>
    </div>
    <div className=' md:ml-24 mt-3  flex'>
      <div className='rounded-full w-16 h-16 mt-3 ml-5 bg-gray-400 flex justify-center items-center'>
        <img src={man} alt="" className='h-8 w-8' />
        </div>
        <p className='mt-7 ml-7 font-mono '>Chat/video call with them after their Acceptance</p>
    </div>
    <div className=' md:ml-24 mt-3  flex '>
      <div className='rounded-full w-16 h-16 mt-3 ml-5 bg-gray-400 flex justify-center items-center'>
        <img src={man} alt="" className='h-8 w-8' />
        </div>
        <p className='mt-7 ml-7 font-mono '>Share your business ideologies & Aspects with them</p>
    </div>
    </div>
     
    </div>
    <div className=' flex justify-center md:w-1/2'>
      <img src={banner} alt="" className=' w-full' />
      

    </div>
  </div>}
  </>
    
  )
}

export default Home