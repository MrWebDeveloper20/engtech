'use client'
import React, {useEffect , useState} from 'react'
import Image from 'next/image'
const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
    //   setLoading(true)
      
     async function getAirportIn() {
        
          const resairportIn = await fetch(`/api/engtech`)
            .then((resairportIn) => resairportIn.json())
            .then((dat) => {
              console.log('dat.airport', dat)
              setBooks(dat)
            //   setLoading(false) 
              // setlength(dat.length)
            })
        
      }
      getAirportIn()
    }, [])

    const handleSearchTitle = (event)=>{
        console.log(event.target.value)
    }
    const handleSearchAuthor = (event)=>{
        console.log(event.target.value)
    }
    const handleSearchSubject = (event)=>{
        console.log(event.target.value)
    }
  return (
   <div className="w-full flex flex-col justify-start items-center">
    <div className="search w-full flex flex-row-reverse gap-3 p-3 bg-gray-200 rounded-tr-lg" >
        <div className="title w-1/3 flex flex-col items-end">
            <label className='mr-3' htmlFor="title"> جستجو (عنوان) </label>
            <input onChange={()=>handleSearchTitle(event)} className='w-full ring-1 rounded-lg py-1 px-3 text-right' type="text" name="title" id="title" />
        </div>
        <div className="title w-1/3 flex flex-col items-end">
            <label className='mr-3' htmlFor="title"> جستجو (نویسنده) </label>
            <input onChange={()=>handleSearchAuthor(event)} className='w-full ring-1 rounded-lg py-1 px-3 text-right' type="text" name="title" id="title" />
        </div>
        <div className="title w-1/3 flex flex-col items-end">
            <label className='mr-3' htmlFor="title"> جستجو (موضوع) </label>
            <input onChange={()=>handleSearchSubject(event)} className='w-full ring-1 rounded-lg py-1 px-3 text-right' type="text" name="title" id="title" />
        </div>
    </div>
    <div className='vazir w-full h-screen grid grid-cols-4 gap-3 p-4 overflow-y-scroll '>

            {books && books.map((book)=>(
                <div key={Math.random() * 100} className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
                    <div className="img flex justify-center items-center">
                        <Image src={`/images/${book.img}`} alt='' width={200} height={200} />
                    </div>
                    <div className="title flex flex-row-reverse items-center">
                        <h2 className='mr-3'> : عنوان </h2>
                        <h2 className='mr-3'> {book.name} </h2>
                    </div>
                    <div className="title flex flex-row-reverse items-center">
                        <h2 className='mr-3'> : نویسنده </h2>
                        <h2 className='mr-3'> {book.author}  </h2>
                    </div>
                    <div className="title flex flex-row-reverse items-center">
                        <h2 className='mr-3'> : موضوع </h2>
                        <h2 className='mr-3'>  {book.subject} </h2>
                    </div>
                    <button className='bg-blue-500 text-white w-1/2 mx-auto rounded-xl py-2 mb-2'> دانلود  </button>

                </div>
            ))}

            {/* <div className='w-72 h-fit flex flex-col gap-3 ring-1 rounded-lg'>
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

            </div> */}
        
    </div>
   </div>
  )
}

export default Books
