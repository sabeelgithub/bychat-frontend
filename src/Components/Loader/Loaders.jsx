import React, { useEffect, useState } from 'react'

import { Circles } from 'react-loader-spinner'

function Loaders() {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'> <Circles
    height="50"
    width="50"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
  
  <p className='text-lg ml-2'>Loading</p>  </div>
   
  )
}

export default Loaders