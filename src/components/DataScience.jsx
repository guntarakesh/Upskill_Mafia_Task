import React from 'react'
import '../CSS/DataScience.css'
import { Eye } from 'lucide-react'
function DataScience() {
  return (
    <div className='datascience'>
        <p className='sub-heading'>DATASCIENCE COURSE LEARNING PATH</p>
        <div className='main-heading'> <span> Data Science </span> Course Curriculum </div>
        <div className='ds-all-cirriculum'>
            <div className='ds-cirriculum'>
                <div className='ds-languages'>
                    <h3>C++</h3>
                    <p>Learn C++ for strong programming fundamentals.</p>
                </div>
                <button> <Eye size={20} color='rgb(163, 16, 156)' /> View Curriculum</button>
            </div>
            <hr></hr>
            <div className='ds-cirriculum'>
                <div className='ds-languages'>
                    <h3>MERN STACK</h3>
                    <p>Master the MERN stack for high-demand projects.</p>
                </div>
                <button> <Eye size={20} color='rgb(163, 16, 156)' /> View Curriculum</button>
            </div>
            <hr></hr>
            <div className='ds-cirriculum'>
                <div className='ds-languages'>
                    <h3>Data Structure & Algorithm </h3>
                    <p>Excel in Data Structures and Algorithms for interview success.</p>
                </div>
                <button> <Eye size={20} color='rgb(163, 16, 156)' /> View Curriculum</button>
            </div>
            <hr></hr>
            <div className='ds-cirriculum'>
                <div className='ds-languages'>
                    <h3>Competitve Programming</h3>
                    <p>Excel in Data Structure and Algorithms for interview success.</p>
                </div>
                <button> <Eye size={20} color='rgb(163, 16, 156)' /> View Curriculum</button>
            </div>
        </div>
    </div>
  )
}

export default DataScience