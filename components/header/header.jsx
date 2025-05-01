'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'

const Header = () => {
  const [select , setSelect] = useState('home')
  return (
    <div className='vazir w-full h-24 flex justify-between items-center rounded-b-lg bg-gray-200'>
      <Link href={'/'} className="login flex flex-col items-center justify-center max-w-1/6">
        <Image src={'/icons/user.png'} alt='logo' width={70} height={120} />
        <h2 className=''> ورود </h2>
      </Link>
      <div className="w-2/4 flex flex-row-reverse gap-5 text-gray-600 text-lg">
        <Link onClick={()=>setSelect('home')} className={` ${select == 'home' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/'}> خانه </Link>      
        <Link onClick={()=>setSelect('Education')} className={` ${select == 'Education' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/Education'}> آموزش </Link>      
        <Link onClick={()=>setSelect('Research')} className={` ${select == 'Research' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/Research'}> پژوهش </Link>      
        <Link onClick={()=>setSelect('Student')} className={` ${select == 'Student' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/Student'}> تربیتی و دانشجویی </Link>      
        <Link onClick={()=>setSelect('AboutUs')} className={` ${select == 'AboutUs' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/AboutUs'}> درباره ما </Link>      
        <Link onClick={()=>setSelect('ContactUs')} className={` ${select == 'ContactUs' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/ContactUs'}> تماس با ما </Link>      
        <Link onClick={()=>setSelect('ScientificGroups')} className={` ${select == 'ScientificGroups' && 'bg-blue-500 text-white px-2 rounded-lg ' }hover:text-blue-800 py-1`} href={'/ScientificGroups'}> گروه های علمی   </Link>      
      </div>
      <div className="logo w-1/4 flex justify-end items-center gap-3">
        <div className="title flex flex-col justify-center items-center">
          <h1 className='text-blue-900'>دانشکده و پژوهشکده فنی و مهندسی</h1>
          <h2 className='text-green-700'> دانشگاه جامع امام حسین (ع) </h2>
        </div>
        <Image src={'/images/logo.jpg'} alt='logo' width={70} height={180} />
      </div>
    </div>
  )
}

export default Header
