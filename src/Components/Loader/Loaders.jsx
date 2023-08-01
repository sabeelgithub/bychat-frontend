import React, { useEffect, useState } from 'react'

import { Circles } from 'react-loader-spinner'

function Loaders() {
  return (
    <div className='bg-white h-screen flex justify-center items-center'> <Circles
    height="50"
    width="50"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
  /></div>
   
  )
}

export default Loaders