import React from 'react'
import Image from 'next/image'
const Books = () => {
  return (
    <div className='vazir w-full h-screen grid grid-cols-4 gap-3 p-4 overflow-y-scroll '>

        <div className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
            <div className="img flex justify-center items-center">
                <Image src={'/images/book.png'} alt='' width={200} height={200} />
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : عنوان </h2>
                <h2 className='mr-3'>کتاب شماره 1</h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : نویسنده </h2>
                <h2 className='mr-3'>  دکتر رضا محمدی </h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : موضوع </h2>
                <h2 className='mr-3'>  مکانیک </h2>
            </div>
            <button className='bg-blue-500 text-white w-1/2 mx-auto rounded-xl py-2 mb-2'> دانلود  </button>

        </div>

        <div className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
            <div className="img flex justify-center items-center">
                <Image src={'/images/book.png'} alt='' width={200} height={200} />
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : عنوان </h2>
                <h2 className='mr-3'>کتاب شماره 2</h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : نویسنده </h2>
                <h2 className='mr-3'>  دکتر محمد حسینی </h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : موضوع </h2>
                <h2 className='mr-3'>  پیشرانه </h2>
            </div>
            <button className='bg-blue-500 text-white w-1/2 mx-auto rounded-xl py-2 mb-2'> دانلود  </button>

        </div>

        <div className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
            <div className="img flex justify-center items-center">
                <Image src={'/images/book.png'} alt='' width={200} height={200} />
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : عنوان </h2>
                <h2 className='mr-3'>کتاب شماره 3</h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : نویسنده </h2>
                <h2 className='mr-3'>  دکتر حسین محمدی </h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : موضوع </h2>
                <h2 className='mr-3'>  مواد پیشرفته </h2>
            </div>
            <button className='bg-blue-500 text-white w-1/2 mx-auto rounded-xl py-2 mb-2'> دانلود  </button>

        </div>

        <div className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
            <div className="img flex justify-center items-center">
                <Image src={'/images/book.png'} alt='' width={200} height={200} />
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : عنوان </h2>
                <h2 className='mr-3'>کتاب شماره 4</h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : نویسنده </h2>
                <h2 className='mr-3'>  دکتر رضا حسینی </h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : موضوع </h2>
                <h2 className='mr-3'>  ریاضی مهندسی </h2>
            </div>
            <button className='bg-blue-500 text-white w-1/2 mx-auto rounded-xl py-2 mb-2'> دانلود  </button>

        </div>

        <div className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
            <div className="img flex justify-center items-center">
                <Image src={'/images/book.png'} alt='' width={200} height={200} />
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : عنوان </h2>
                <h2 className='mr-3'>کتاب شماره 5</h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : نویسنده </h2>
                <h2 className='mr-3'>  دکتر رضا کاظمی </h2>
            </div>
            <div className="title flex flex-row-reverse items-center">
                <h2 className='mr-3'> : موضوع </h2>
                <h2 className='mr-3'>  آئرودینامیک </h2>
            </div>
            <button className='bg-blue-500 text-white w-1/2 mx-auto rounded-xl py-2 mb-2'> دانلود  </button>

        </div>
      
    </div>
  )
}

export default Books
