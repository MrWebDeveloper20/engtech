'use client'
import React, {useState} from 'react'
import Books from './books'
import Mags from './mag'

const page = () => {
  const [select , setSelect] = useState('book')
  return (
    <div className='vazir w-full h-screen flex flex-row-reverse items-start justify-center m-2'>
      <div className="w-1/6 text-lg text-gray-600 flex flex-col justify-start items-end gap-4 p-5 ring-1 h-screen rounded-l-lg mr-3">
        <h2 onClick={()=>setSelect('book')} className={` ${select == 'book' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> کتب </h2>
        <h2 onClick={()=>setSelect('magazine')} className={` ${select == 'magazine' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg    `}> نشریات </h2>
        <h2 onClick={()=>setSelect('article')} className={` ${select == 'article' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مقالات </h2>
        <h2 onClick={()=>setSelect('projects')} className={` ${select == 'projects' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> پروژه ها </h2>
        <h2 onClick={()=>setSelect('Conference')} className={` ${select == 'Conference' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> همایش های علمی </h2>
        <h2 onClick={()=>setSelect('khedmat')} className={` ${select == 'khedmat' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> کسر | جایگزین خدمت </h2>
        <h2 onClick={()=>setSelect('Workshop')} className={` ${select == 'Workshop' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> کارگاه ها و دوره های آموزشی   </h2>
      </div>
      <div className="w-5/6 h-screen ring-1 rounded-r-lg mr-4">
        {select == 'book' && <Books />}
        {select == 'magazine' && <Mags />}
      </div>
    </div>
  )
}

export default page
