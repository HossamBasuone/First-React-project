import React from 'react'

export default function Page2() {
  return (
 <>
<div className="h-screen text-center bg-[#1abc9c] flex flex-col justify-center items-center">
  <h1 className=' uppercase text-[37px] font-bold text-white'>about component
  </h1>
  <div className="parent flex justify-center items-center mt-6  gap-x-6">
  <div className="child1 w-[80px] h-1 bg-white"></div>
  <div> <i className="fa-solid fa-star text-white "></i></div>
  <div className="child3 w-[80px] h-1 bg-white"></div>
</div>
<div className="flex flex-col md:flex-row gap-7 text-start text-white mt-4">
  <p className='w-80'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  <p className='w-80'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>
</div>
 </>
  )
}
