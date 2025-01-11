import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Page4() {
  return (
    <>
  <div className="mt-20 flex   justify-center items-center flex-col">
  <h1 className=" uppercase text-[37px] text-center font-bold ">CONTACT component</h1>
        <div className="parent flex justify-center items-center gap-x-6">
          <div className="child1 w-[80px] h-1 bg-black "></div>
          <div>
            {" "}
            <i className="fa-solid fa-star  "></i>
          </div>
          <div className="child3 w-[80px] h-1 bg-black"></div>
        </div>
        <form className="flex pt-20 mb-20 w-full md:w-[60%] flex-col p-10 mx-auto gap-4">
      <div>
        <div className="mb-2 block">
          <Label className="text-[#1abc9c]" htmlFor="email1" value="Your Name" />
        </div>
        <TextInput 
          id="email1"
          type="email "
          placeholder="UserName"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-[#1abc9c]" htmlFor="email1"  value="Your age" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="UserAge"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-[#1abc9c]" htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="UserName"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label className="text-[#1abc9c]" htmlFor="password1" value="Your password" />
        </div>
        <TextInput placeholder="userPassword" id="password1" type="password" required />
      </div>
    
      <button className="bg-[#1abc9c] w-fit rounded-lg p-3 text-white">send Massage</button>
    </form>
  </div>
   
    </>);
}
