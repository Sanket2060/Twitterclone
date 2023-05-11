import Home from "./pages/Home";
import Navbar from "./Navbar";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Singletweet from "./pages/singletweet";

const Shell = () => {
return (

    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route index element={Home}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='/:id' element={<Singletweet/>}></Route>
        </Routes>
               
      </BrowserRouter>

    <Home />
  
    </>
)




}
export default  Shell;