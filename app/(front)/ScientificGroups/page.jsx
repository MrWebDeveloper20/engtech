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
        {
          select == 'airospace' &&
          <div className='flex flex-col items-end pb-2 gap-2 text-blue-400 mr-3'>
            <h3 className=''> انجمن علمی </h3>
            <h3 className=''> امکانات آموزشی </h3>
            <h3 className=''> رشته - گرایش ها </h3>
            <h3 className=''> کرسی های تخصصی </h3>
            <h3 className='text-sm'> همایش های علمی و کارگاه های آموزشی </h3>
          </div>
        }
        <h2 onClick={()=>setSelect('mechanic')} className={` ${select == 'mechanic' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مهندسی مکانیک </h2>
        {
          select == 'mechanic' &&
          <div className='flex flex-col items-end pb-2 gap-2 text-blue-400 mr-3'>
            <h3 className=''> انجمن علمی </h3>
            <h3 className=''> امکانات آموزشی </h3>
            <h3 className=''> رشته - گرایش ها </h3>
            <h3 className=''> کرسی های تخصصی </h3>
            <h3 className='text-sm'> همایش های علمی و کارگاه های آموزشی </h3>
          </div>
        }
        <h2 onClick={()=>setSelect('Industrial')} className={` ${select == 'Industrial' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg  `}> مهندسی صنایع </h2>
        {
          select == 'Industrial' &&
          <div className='flex flex-col items-end pb-2 gap-2 text-blue-400 mr-3'>
            <h3 className=''> انجمن علمی </h3>
            <h3 className=''> امکانات آموزشی </h3>
            <h3 className=''> رشته - گرایش ها </h3>
            <h3 className=''> کرسی های تخصصی </h3>
            <h3 className='text-sm'> همایش های علمی و کارگاه های آموزشی </h3>
          </div>
        }
        <h2 onClick={()=>setSelect('chemical')} className={` ${select == 'chemical' && 'bg-green-500 text-white px-2 rounded-lg ' }hover:text-blue-800 p-1 cursor-pointer rounded-lg    `}> مهندسی شیمی </h2>
        {
          select == 'chemical' &&
          <div className='flex flex-col items-end pb-2 gap-2 text-blue-400 mr-3'>
            <h3 className=''> انجمن علمی </h3>
            <h3 className=''> امکانات آموزشی </h3>
            <h3 className=''> رشته - گرایش ها </h3>
            <h3 className=''> کرسی های تخصصی </h3>
            <h3 className='text-sm'> همایش های علمی و کارگاه های آموزشی </h3>
          </div>
        }
      </div>
      <div className="w-4/5 h-screen ring-1 rounded-r-lg mr-4">
        {/* {select == 'book' && <Books />} */}
        {/* {select == 'magazine' && <Mags />} */}
      </div>
    </div>
  )
}

export default page
