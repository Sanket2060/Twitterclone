import Home from "./pages/Home";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Singletweet from "./pages/singletweet";
import Navbar from "./components/Navbar";
import About from "./pages/About";
const Shell = () => {
return (

    <>
        <Navbar />
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />}/>
            <Route path='/tweet/:id' element={<Singletweet />}/>
        </Routes>
               
      </BrowserRouter>

    <Home />
  
    </>
)




}
export default  Shell;