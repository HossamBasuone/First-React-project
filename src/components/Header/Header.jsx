
import { Navbar } from "flowbite-react";
import { Link,NavLink } from "react-router-dom";

export function Header() {
  return (<div className=" pb-4 bg-[#2c3e50]">
    <Navbar className="bg-[#2c3e50] fixed z-10 w-full">
      <Navbar.Brand>
        <h1 className="text-[40px] text-white"><Link to="">Start Framework</Link>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="font-bold text-white ">
       
        <NavLink to="Page2">ABOUT</NavLink>
        <NavLink to="Page3">PORTFOLIO</NavLink>
        <NavLink to="Page4">CONTACT</NavLink>
        
       
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
