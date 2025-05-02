import React from 'react'
import Image from 'next/image'

const Systems = () => {
  return (
   <div className="vazir w-full h-fit flex flex-col items-center ">
        <h2 className='text-xl text-blue-500'> سامانه های دانشگاه </h2>
        <div className=' w-full h-40 flex gap-3'>
                <a target='blank' href='https://book.ihu.ac.ir/' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/book.png'} alt='' width={80} height={80} />
                    <h2 className=''> فروشگاه کتاب </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://mail.ihu.ac.ir/auth/login' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/email.png'} alt='' width={80} height={80} />
                    <h2 className=''> پست الکترونیک </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://mgt.ihu.ac.ir/page/hard-revenge' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/haji.png'} alt='' width={80} height={80} />
                    <h2 className=''> بانک اطلاعاتی </h2>
                    <h2 className=''>شهید سلیمانی</h2>
                </a>      
                <a target='blank' href='https://acc.ihu.ac.ir/page/register' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/username.png'} alt='' width={80} height={80} />
                    <h2 className=''> درخواست کد کاربری </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://acc.ihu.ac.ir/' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/internet.png'} alt='' width={80} height={80} />
                    <h2 className=''> مدیریت اینترنت </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://msp.ihu.ac.ir/' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/soldier.png'} alt='' width={80} height={80} />
                    <h2 className=''> سامانه کسر خدمت </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://library.ihu.ac.ir/' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/library.png'} alt='' width={80} height={80} />
                    <h2 className=''> کتابخانه مرکزی </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://conf.ihu.ac.ir/' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/conference.png'} alt='' width={80} height={80} />
                    <h2 className=''> همایش ها </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://journals.ihu.ac.ir/list_200002.html' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/magazine.png'} alt='' width={80} height={80} />
                    <h2 className=''> نشریات </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://lms.ihu.ac.ir/login' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/education.png'} alt='' width={80} height={80} />
                    <h2 className=''> آموزش مجازی </h2>
                    <h2 className=''></h2>
                </a>      
                <a target='blank' href='https://ict.ihu.ac.ir/' className="system1 w-1/11 h-40 flex flex-col justify-around items-center bg-green-300 rounded-lg">
                    <Image src={'/icons/services.png'} alt='' width={80} height={80} />
                    <h2 className=''>  خدمات الکترونیکی </h2>
                    <h2 className=''></h2>
                </a>      
        </div>
   </div>
  )
}

export default Systems
