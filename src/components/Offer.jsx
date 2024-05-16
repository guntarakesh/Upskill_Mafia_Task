import React from 'react'
import Lfirst from '../assets/first.png'
import Lsecond from '../assets/second.png'
import Ssecond from '../assets/Ss.png'
function Offer() {
    const DesktopImageO = () => (
        <img src={Lfirst} alt="Desktop Image" />
      );
      const DesktopImageF = () => (
        <img src={Lsecond} alt="Desktop Image" />
      );
      
      // Mobile image component
      const MobileImageO = () => (
        <img src='' alt="" />
      );
      const MobileImageF = () => (
        <img src={Ssecond} alt="Mobile Image" />
      );

        
  const screenWidth = window.innerWidth;
  const breakpoint = 768;
  return (
    <div className='mixed-2'>
    {screenWidth >= breakpoint ? <DesktopImageO /> : ''}
    {screenWidth >= breakpoint ? <DesktopImageF /> : <MobileImageF />}
    </div>
  )
}

export default Offer