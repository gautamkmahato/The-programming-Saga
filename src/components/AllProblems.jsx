import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

function AllProblems() {
  const [arr, setArr] = useState([]); 
  

  useEffect(() =>{
    async function getData() {
      const actualData = await axios.get(
        `${process.env.REACT_APP_PB_URL}/api/collections/allproblems/records`
      );
      setArr(actualData.data.items)
    }
    getData();
  },[])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Category</th>
            <th>Solution</th>
            <th>Status</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((data, index) => (
            
              <Table key={index}
                index={index + 1}
                id={data.id}
                title={data.title}
                difficulty={data.difficulty}
                category={data.category}
                solution={data.solution}
                status={data.status}
                company={data.company}
              />
            
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllProblems;
