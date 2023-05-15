import Home from "./pages/Home";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Singletweet from "./pages/Singletweet";
import Navbar from "./components/Navbar";
import About from "./pages/About";
const Shell = () => {
return (

    <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/tweet/:_id' element={<Singletweet />}/>
        </Routes>    
      </BrowserRouter>

   
  
    </>
)




}
export default  Shell;