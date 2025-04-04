import React from "react";
import "./index.css"; 
import Header from "./Components/Navbar";
import Sliver from "./Components/Sliver"; 
import Contact from "./Components/Contact";
import SwiperCarousel from "./Components/SwiperCarousel"
import Maqsadlar from "./Components/Maqsadlar";
import Shtursunov from "./Components/Shtursunov"
import Salom from "./Components/Salom"
import Sharxlar from "./Components/Sharxlar"
import Re from "./Components/Re"
import Footer from "./Components/Footerm";

function App() {
    return (
        <div>
            <Header/>
            <Sliver />
            <Contact />
            <SwiperCarousel/>
            <Maqsadlar/>
            <Shtursunov/>
            <Salom/>
            <Sharxlar/>
            <Re/>
            <Footer/>
        </div>
    );
}
export default App;
