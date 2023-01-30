// import React, { useContext, useEffect, useState } from 'react';
// import { problemsDbContext } from '../context/DbContextApi';
// import pb from '../lib/pocketbase'
// import axios from 'axios';

// function Sample() {
//     const [dyCount, setdyCount] = useState(0);
//     const [arrCount, setarrCount] = useState(0);
//     let dynamicCount = 0;
//     let arrayCount = 0;
//     // const treeCount = 0;

//     const [arr, setArr] = useState([]);
//     const [is, setIs] = useState(false);

//     async function getData() {
//       const actualData = await axios.get(`${process.env.REACT_APP_PB_URL}/api/collections/allproblems/records`)
//       console.log(actualData.data.items);
//       setArr(actualData.data.items);

//       actualData.data.items.forEach(element => {
//       //console.log("element.category")
//         if(element.category === "dynamic programming"){
//           setdyCount((c) => c + 1)
//             console.log("dyCount")
//         }
//         else if(element.category === "array"){
//           setarrCount((c) => c + 1)
//             console.log("arrCount")
//         }
//       });
    
//       return actualData;
//     }
  

//   // you can also fetch all records at once via getFullList
//   useEffect(() => {
//     console.log("top")
//     getData();
//   }, [])

  

//     return (
//         <>
//         <h1>Sample</h1>
//         {arr.map((data, index) =>(
//                     <>
//                         <div key={data.id}>
//                         <p>{data.title}</p>
//                         </div>
                        
//                     </>
//                 ))} 
//           <p>{dyCount}</p>
//           <p>{arrCount}</p>
//         </>
//     )
// }

// export default Sample