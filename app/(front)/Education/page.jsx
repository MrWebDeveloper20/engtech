'use client'
import React, {useState} from 'react'
// import Books from './books'
// import Mags from './mag'

const page = () => {
  const [select , setSelect] = useState('Field')
  return (
    <div className='vazir w-full h-screen flex flex-row-reverse items-start justify-center m-2'>
      <div className="w-1/5 text-gray-600 flex flex-col justify-start items-end gap-4 p-5 ring-1 h-screen rounded-l-lg mr-3">
        <h2 onClick={()=>setSelect('Field')} className={` ${select == 'Field' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> رشته - گرایش ها و دوره های تحصیلی </h2>
        <h2 onClick={()=>setSelect('roules')} className={` ${select == 'roules' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> آئین نامه ها، مقررات و بخش نامه ها  </h2>
        <h2 onClick={()=>setSelect('forms')} className={` ${select == 'forms' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> فرم ها و کاربرگ های آموزشی   </h2>
        <h2 onClick={()=>setSelect('Thesis')} className={` ${select == 'Thesis' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> جلسات دفاع پایان نامه  </h2>
        <h2 onClick={()=>setSelect('equipment')} className={` ${select == 'equipment' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg    `}> فضا و امکانات آموزشی </h2>
        <h2 onClick={()=>setSelect('Support')} className={` ${select == 'Support' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> حمایت تحصیلی </h2>
      </div>
      <div className="w-4/5 h-screen ring-1 rounded-r-lg mr-4">
        {/* {select == 'book' && <Books />} */}
        {/* {select == 'magazine' && <Mags />} */}
      </div>
    </div>
  )
}

export default page
