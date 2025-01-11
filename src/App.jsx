import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Notfound from './components/Notfound/Notfound';
import Page3 from './components/Page3/Page3';
import Page4 from "./components/Page4/Page4";


let x= createHashRouter([
  {path: "",element: <Layout/>,children:[
{index : true, element:<Page1/>},
{path:"Page2", element:<Page2/>},
{path:"Page3", element:<Page3/>},
{path:"Page4", element:<Page4/>},
{path:"*", element:<Notfound/>},


  ]},
])


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
