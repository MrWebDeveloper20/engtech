import React from 'react'

const page = () => {
  return (
    <div className='vazir text-xl w-full h-screen flex flex-col items-center justify-start gap-5 my-4 p-10'>
      <div className="address w-full flex flex-row-reverse justify-start items-center">
        <h2 className='text-blue-500'>  : آدرس</h2>
        <p className='mr-2'> 
         تهران - بزرگراه شهید بابایی - دانشگاه جامع امام حسین (ع) - موقعیت امام صادق(ع) - دانشكده و پژوهشكده فنی و مهندسی
        </p>
      </div>
      <div className="phone w-full flex flex-row-reverse justify-start items-center">
        <h2 className='text-blue-500'>  : تلفن تماس</h2>
        <h2 className='mr-2'> 74189312 </h2>
      </div>
      <div className="email w-full flex flex-row-reverse justify-start items-center">
        <h2 className='text-blue-500'>  : پست الکترونیکی</h2>
        <h2 className='mr-2'> engtech@ihu.ac.ir </h2>
      </div>     
      
    </div>
  )
}

export default page
