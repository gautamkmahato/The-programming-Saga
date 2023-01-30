import React from 'react';
import {  useNavigate } from 'react-router-dom';

const imageDB = {
  amazon: `${process.env.REACT_APP_PB_URL}/api/files/images/4vth52hr851tktm/amazon_uEfKWFSrsf.png`,
  microsoft: `${process.env.REACT_APP_PB_URL}/api/files/images/nop5hifsfgp7al1/microsoft_3fgPsNsTf6.png`,
  google: `${process.env.REACT_APP_PB_URL}/api/files/images/d66bn7yda6hg7ot/google_BQUxgPMEmf.png`,
  meta: `${process.env.REACT_APP_PB_URL}/api/files/images/w7le47p360qk758/facebook_a3mbb1i9Yg.png`,
  netflix: `${process.env.REACT_APP_PB_URL}/api/files/images/i8znyfu0glkla8z/netflix_0BEjBT1ggM.png`
}

function Table(props) {

  const navigate = useNavigate();

  const getCompany = (companyName) =>{
    if(companyName === 'amazon'){
        return imageDB.amazon;
    }
    else if(companyName === 'meta'){
        return imageDB.meta;
    }
    else if(companyName === 'google'){
        return imageDB.google;
    }
    else if(companyName === 'microsoft'){
        return imageDB.microsoft;
    }
    else if(companyName === 'netflix'){
        return imageDB.netflix;
    }
  }

  return (
      <tr className='tr-data' key={props.index}>
          <th>{props.index}</th>
          {/* <Link to={`/problems/${props.id}`} style={{textDecoration: "none"}}><th className='th-title' style={{border:"none", paddingTop: "14px"}}>{props.title}</th></Link> */}
          {/* <Link to={`/problems/${props.id}`} style={{textDecoration: "none", border:"none", paddingTop: "14px"}}>{props.title}</Link> */}
          <th onClick={()=>navigate(`/problems/${props.id}`)}>{props.title}</th>
          <th>{props.difficulty}</th>
          <th>{props.category}</th>
          <th>{props.solution}</th>
          <th>
            {props.status === true ? <i className="fa-regular fa-square-check"></i> : <i className="fa-solid fa-square-xmark"></i>}
          </th>
          <th>
            <div className='company-list'>       
              {props.company.map((val, index) =>(
                  <div key={index}>
                  <img src={getCompany(val)} alt="" />
                  </div>
              ))}
            </div>
          </th>
      </tr>
  
  )
}

export default Table