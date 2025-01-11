import React from 'react'
import img1 from '../../assets/avataaars.svg'

export default function Page1() {
  return (
    <>    
    <div className="h-screen bg-[#1abc9c] text-center flex justify-center  items-center flex-col ">

<div className='size-[90%]  flex  items-start  md:size-[40%]'>
<img src={img1} className='size-full' alt="" />
</div>

<div >
  <h1 className='text-[40px] uppercase font-bold text-white tracking-normal   '>start Framework</h1>
  
<div className="parent my-9 flex justify-center items-center  gap-x-6">
  <div className="child1 w-[80px] h-1 bg-white"></div>
  <div> <i className="fa-solid fa-star text-white "></i></div>
  <div className="child3 w-[80px] h-1 bg-white"></div>
</div>
</div>
<div className='text-white'>Graphic Artist - Web Designer - Illustrator</div>

    </div>

    
   
 
    </>

  )
}
