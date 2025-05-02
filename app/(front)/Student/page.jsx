'use client'
import React, {useState} from 'react'
// import Books from './books'
// import Mags from './mag'

const page = () => {
  const [select , setSelect] = useState('basij')
  return (
    <div className='vazir w-full h-screen flex flex-row-reverse items-start justify-center m-2'>
      <div className="w-1/5 text-gray-600 flex flex-col justify-start items-end gap-4 p-5 ring-1 h-screen rounded-l-lg mr-3">
        <h2 onClick={()=>setSelect('basij')} className={` ${select == 'basij' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> بسیج دانشجویی  </h2>
        <h2 onClick={()=>setSelect('sport')} className={` ${select == 'sport' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مسابقات ورزشی  </h2>
        <h2 onClick={()=>setSelect('association')} className={` ${select == 'association' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> انحمن های علمی </h2>
        <h2 onClick={()=>setSelect('second')} className={` ${select == 'second' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> افق گام دوم انقلاب </h2>
        <h2 onClick={()=>setSelect('camp')} className={` ${select == 'camp' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg    `}> اردوهای علمی، تربیتی </h2>
        <h2 onClick={()=>setSelect('Scientific')} className={` ${select == 'Scientific' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مسابقات علمی، فرهنگی   </h2>
        <h2 onClick={()=>setSelect('Cultural')} className={` ${select == 'Cultural' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> برنامه های فرهنگی، تربیتی </h2>
      </div>
      <div className="w-4/5 h-screen ring-1 rounded-r-lg mr-4">
        {/* {select == 'book' && <Books />} */}
        {/* {select == 'magazine' && <Mags />} */}
      </div>
    </div>
  )
}

export default page
