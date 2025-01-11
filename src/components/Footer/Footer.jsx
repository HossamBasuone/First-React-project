import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
  
      <div className="bg-[#2c3e50]  flex  flex-col  gap-12 justify-around items-center  md:flex-row md:gap-0 py-6  md:py-20 md:justify-evenly text-white">
        <div className="flex  flex-col items-center">
          <h1 className="font-bold text-[30px]">Loaction</h1>
          <p>
            2215 John Daniel Drive
         
          </p>
          <p>    Clark, MO 65243
          </p>
        </div>
        <div className="flex text-center  flex-col items-center">
          <h1 className="font-bold text-[30px]">AROUND THE  WEB</h1>
          <div className="icon flex gap-x-1">
         <div className="size-9 border-2 rounded-full flex justify-center items-center"><i class="fa-brands fa-facebook"></i></div>
         <div className="size-9 border-2 rounded-full flex justify-center items-center"><i class="fa-brands fa-twitter"></i></div>
         <div className="size-9 border-2 rounded-full flex justify-center items-center"><i class="fa-brands fa-linkedin"></i></div>
         <div className="size-9 border-2 rounded-full flex justify-center items-center"><i class="fa-solid fa-globe"></i></div>
        </div>
        </div>
        <div className="flex text-center  flex-col items-center">
          <h1 className="font-bold text-[30px]">ABOUT FREELANCER</h1>
          <p>
          Freelance is a free to use, licensed Bootstrap theme <br />created  by Route
          </p>
         
        </div>  
      </div>
        <div className="bg-[#1a252f] flex justify-center items-center h-14 w-full text-white text-center ">
        Copyright © Your Website 2021      </div>



    </>
  );
}
