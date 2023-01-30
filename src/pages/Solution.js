import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Solution() {

    const [vidData, setvidData] = useState([]);
    const { id } = useParams(); 

    
    
      // you can also fetch all records at once via getFullList
      useEffect(() => {
        async function getData() { 
            const actualData = await axios.get(
              `${process.env.REACT_APP_PB_URL}/api/collections/allproblems/records?filter=id='${id}' `
            );
            if(actualData.data.items[0].video.length > 0){
                setvidData(actualData.data.items[0].video)
            }
            
            return actualData;
        }
        getData();
      }, [id]);

    return (
        <>
            <h3>YouTube Tutorial</h3>
            {vidData.length > 0 ? vidData.map((data, index) =>(
                
                <div key={index}>
                    <iframe width='560' height='315' src={data.url} title='YouTube video player' allowFullScreen></iframe>
                </div>
                
            )) : <>No solution</>}
        </>
    )
}

export default Solution