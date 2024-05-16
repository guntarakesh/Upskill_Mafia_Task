import React from 'react'
import '../CSS/Certificates.css'
import Lfirst from '../assets/c1 (2).png'
import Lsecond from '../assets/c2 (2).png'
import Sfirst from '../assets/Sfirst.png'
import Ssecond from '../assets/Ssecond.png'
function Certificates() {
 
  const DesktopImageO = () => (
    <img src={Lfirst} alt="Desktop Image" />
  );
  const DesktopImageF = () => (
    <img src={Lsecond} alt="Desktop Image" />
  );
  
  // Mobile image component
  const MobileImageO = () => (
    <img src={Sfirst} alt="Mobile Image" />
  );
  const MobileImageF = () => (
    <img src={Ssecond} alt="Mobile Image" />
  );



  
  const screenWidth = window.innerWidth;
  const breakpoint = 768;
  return (
<>
<div className='certificates'>
        <h1>Unlock <span>6 Certificates</span> & <span>Internship Opportunities!</span> </h1>
    </div>
    <div className='mixed'>
    {screenWidth >= breakpoint ? <DesktopImageO /> : <MobileImageO />}
    {screenWidth >= breakpoint ? <DesktopImageF /> : <MobileImageF />}
    </div>
</>
  )
}

export default Certificates