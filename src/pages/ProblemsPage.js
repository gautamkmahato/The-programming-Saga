import React from 'react'
import AllProblems from '../components/AllProblems';
import Navbar from '../components/Navbar'

function ProblemsPage() {
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="left-column">
                <h3 className='left-column-h3'>Featured Lists</h3>
            </div>
            <div className="right-column">
                <h3>All Problems</h3>
                <AllProblems />
            </div>
        </div>
    </div>
  )
}

export default ProblemsPage;