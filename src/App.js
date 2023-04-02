import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Textutils from "./pages/Textutils";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    
           
            
         <Route path="/textutils" element={<Textutils/>}/>
           
          <Route path="/home" element={<Home/>}/>
           
       
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
