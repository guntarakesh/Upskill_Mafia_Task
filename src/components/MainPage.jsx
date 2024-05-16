import { Dessert, File, FileQuestion, GraduationCap, Laptop, Send, ShieldQuestionIcon, Star } from 'lucide-react'
import React from 'react'
import '../CSS/MainPage.css'
function MainPage() {
  return (
   <div>
     <div className='main-1'>
        <p className='mlogo'> <Dessert className='mmlogo' size={30} color='black' /> An <b>IIT DELHI</b> Alumni Initiative </p>
        <div className='mtext'>
        <p>Become an Expert in the</p>
        <p>field of <span className='mc-text'>Data Science</span> </p>
        <p className='mc-text'>with 6 courses</p>
        </div>
        <p>A specially crafted Tech Kickstarter, with <b>5+ extensive</b> online courses.</p>
        <div className='m-perks'>
            <p> <Star className='star' color='brown' size={30} /> Personal Mentorship </p>
            <p> <Star className='star' color='brown' size={30} /> Internship Assistance </p>
            <p> <Star className='star' color='brown' size={30} /> Industry Certified Courses </p>
        </div>
        <div className='mbuttons'>
            <button>Enroll Now <Send size={30} color='white'/>  </button>
            <a>Know More <FileQuestion size={30} color='rgb(163, 16, 156)' /> </a>
        </div>
    </div>
    <div className='main-2-info'>
      <p> <Laptop size={50} color='rgb(163, 16, 156)'/> <p className='mcount'> 24 <p>Courses</p> </p>  </p>
      <p> <GraduationCap size={50} color='rgb(163, 16, 156)'/> <p className='mcount'> 30k+ <p>Learners</p> </p>  </p>
      <p> <ShieldQuestionIcon size={50} color='rgb(163, 16, 156)'/> <p className='mcount'> 100k+ <p>Doubts Solved</p> </p>  </p>
      <p> <File size={50} color='rgb(163, 16, 156)'/> <p className='mcount'> 10k+ <p>Student Projects</p> </p>  </p>
    </div>
   </div>
  )
}

export default MainPage