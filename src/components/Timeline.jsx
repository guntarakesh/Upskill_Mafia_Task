import React from 'react'
import '../CSS/Timeline.css'
import Loffer from '../assets/offer.png'
import Lflow from '../assets/flow.jpg'
import Soffer from '../assets/Soffer.png'
import Sflow from '../assets/Sflow.png'
function Timeline() {
  const DesktopImageO = () => (
    <img src={Loffer} alt="Desktop Image" />
  );
  const DesktopImageF = () => (
    <img src={Lflow} alt="Desktop Image" />
  );
  
  // Mobile image component
  const MobileImageO = () => (
    <img src={Soffer} alt="Mobile Image" />
  );
  const MobileImageF = () => (
    <img src={Sflow} alt="Mobile Image" />
  );

  const screenWidth = window.innerWidth;
  const breakpoint = 768;
  
  return (
   <div className='timeline'>
    <p> 
    Don't miss out on this <span>limited-time opportunity</span> to learn for <span>Free!</span> 
    </p>
    {screenWidth >= breakpoint ? <DesktopImageO /> : <MobileImageO />}
    {screenWidth >= breakpoint ? <DesktopImageF /> : <MobileImageF />}
   </div>
  )
}

export default Timeline