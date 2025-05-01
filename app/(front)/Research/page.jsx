'use client'
import React, {useState} from 'react'

const page = () => {
  const [select , setSelect] = useState('book')
  return (
    <div className='vazir w-full h-screen flex flex-col items-center justify-start my-4'>
      <div className="text-lg text-gray-600 w-full flex flex-row-reverse justify-center items-center gap-4">
        <h2 onClick={()=>setSelect('book')} className={` ${select == 'book' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg  `}> کتب </h2>
        <h2 onClick={()=>setSelect('magazine')} className={` ${select == 'magazine' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg    `}> نشریات </h2>
        <h2 onClick={()=>setSelect('article')} className={` ${select == 'article' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg  `}> مقالات </h2>
        <h2 onClick={()=>setSelect('projects')} className={` ${select == 'projects' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg  `}> پروژه ها </h2>
        <h2 onClick={()=>setSelect('Conference')} className={` ${select == 'Conference' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg  `}> همایش های علمی </h2>
        <h2 onClick={()=>setSelect('khedmat')} className={` ${select == 'khedmat' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg  `}> کسر | جایگزین خدمت </h2>
        <h2 onClick={()=>setSelect('Workshop')} className={` ${select == 'Workshop' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer ring-1 rounded-lg  `}> کارگاه ها و دوره های آموزشی   </h2>
      </div>
    </div>
  )
}

export default page
