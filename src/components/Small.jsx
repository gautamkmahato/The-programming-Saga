import React from 'react'
import { Link } from 'react-router-dom'

function Small(props) {
  return (
    <div>
        <div className="card-container">
            <div className="card" style={{backgroundImage: 'url("' + props.img + '")'}}>
                <div className="card-content">
                    <h3>{props.title}</h3>
                    <div className='card-data'>
                        <p>Questions <span style={{fontWeight: '600'}}>30</span></p>
                        <Link to={`/problems/dynamic-programming/list/${props.sub}`}><button>Start Learning</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Small