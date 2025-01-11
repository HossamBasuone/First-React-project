import React from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
export default function Page3() {
  return (
    <>
      <div className="bg-white flex flex-col text-center items-center mb-11 pt-20 ">
        <h1 className=" uppercase text-[37px] font-bold ">PORTFOLIO component</h1>
        <div className="parent flex justify-center items-center gap-x-6">
          <div className="child1 w-[80px] h-1 bg-black "></div>
          <div>
            {" "}
            <i className="fa-solid fa-star  "></i>
          </div>
          <div className="child3 w-[80px] h-1 bg-black"></div>
        </div>

        <div className="flex mt-7  gap-3  flex-wrap mx-2   items-center justify-center  ">
         
          <div classNameNmclassName="w-full md:w-1/3 px-2   flex items-center justify-center">
            <div className="md:w-96 relative  group ">
              <img src={img1} className=" rounded-xl  w-full" alt="" />
              <div class="absolute w-full  h-full rounded-xl  inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-9xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div classNameNmclassName="w-full md:w-1/3 px-2   flex items-center justify-center">
            <div className="md:w-96 relative  group ">
              <img src={img2} className=" rounded-xl  w-full" alt="" />
              <div class="absolute w-full  h-full rounded-xl  inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-9xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div classNameNmclassName="w-full md:w-1/3 px-2   flex items-center justify-center">
            <div className="md:w-96 relative  group ">
              <img src={img3} className=" rounded-xl  w-full" alt="" />
              <div class="absolute w-full  h-full rounded-xl  inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-9xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div classNameNmclassName="w-full md:w-1/3 px-2   flex items-center justify-center">
            <div className="md:w-96 relative  group ">
              <img src={img1} className=" rounded-xl  w-full" alt="" />
              <div class="absolute w-full  h-full rounded-xl  inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-9xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div classNameNmclassName="w-full md:w-1/3 px-2   flex items-center justify-center">
            <div className="md:w-96 relative  group ">
              <img src={img2} className=" rounded-xl  w-full" alt="" />
              <div class="absolute w-full  h-full rounded-xl  inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-9xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div classNameNmclassName="w-full md:w-1/3 px-2   flex items-center justify-center">
            <div className="md:w-96 relative  group ">
              <img src={img3} className=" rounded-xl  w-full" alt="" />
              <div class="absolute w-full  h-full rounded-xl  inset-0 bg-[#1abc9c] opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="text-white text-9xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
