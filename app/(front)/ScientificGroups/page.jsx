'use client'
import React, {useState} from 'react'
// import Books from './books'
// import Mags from './mag'

const page = () => {
  const [select , setSelect] = useState('airospace')
  return (
    <div className='vazir w-full h-screen flex flex-row-reverse items-start justify-center m-2'>
      <div className="w-1/5 text text-gray-600 flex flex-col justify-start items-end gap-4 p-5 ring-1 h-screen rounded-l-lg mr-3">
        <h2 onClick={()=>setSelect('airospace')} className={` ${select == 'airospace' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مهندسی هوافضا  </h2>
        <h2 onClick={()=>setSelect('Industrial')} className={` ${select == 'Industrial' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مهندسی صنایع </h2>
        <h2 onClick={()=>setSelect('chemical')} className={` ${select == 'chemical' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg    `}> مهندسی شیمی </h2>
        <h2 onClick={()=>setSelect('mechanic')} className={` ${select == 'mechanic' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مهندسی مکانیک </h2>
      </div>
      <div className="w-4/5 h-screen ring-1 rounded-r-lg mr-4">
        {/* {select == 'book' && <Books />} */}
        {/* {select == 'magazine' && <Mags />} */}
      </div>
    </div>
  )
}

export default page
