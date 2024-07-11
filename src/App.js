import React from "react";
import HeroPart1 from "./component/HeroPart1/HeroPart1";
import HeroPart2 from "./component/HeroPart2/HeroPart2";
import Testimonial from "./component/Testimonial/Testimonial";
import Header from "./component/Header/Header";
import Moving from "./component/Moving/Moving";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className='App'>
<Header/>
      <HeroPart1 />
      <HeroPart2 />
      <HeroPart2 />
      <br />
      <hr />
      <Moving/>
      <Testimonial />
      <Footer/>
      
    </div>
  );
}

export default App;
