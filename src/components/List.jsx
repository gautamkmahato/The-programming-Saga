import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pb from '../lib/pocketbase';
import Navbar from './Navbar';
import Table from './Table';

function List() {
  
  const [arr, setArr] = useState([]);

  const {subcategory} = useParams();

  // you can also fetch all records at once via getFullList
  
  
  useEffect(() => {
    const getAllData = async() =>{
      // list and filter "example" collection records
      try{
        const list = await pb.collection("allproblems").getFullList(200, {
          filter: ` category = 'dynamic programming' && subcategory = '${subcategory}' `,
        });
        setArr(list);
      } catch(err){
        console.log(err)
      }
    }
    getAllData();
  },[subcategory]);
  
  return (
    <>
    <Navbar />
      <div className="list-app">
      <header className="App-header">
        <h3>All {subcategory} Questions</h3>
      </header>

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
                {arr.length > 0 ? arr.map((data, index) =>(
                  <Table key={index} index={index+1} id={data.id} title={data.title} difficulty={data.difficulty} category={data.category} solution={data.solution} status={data.status} company={data.company} />
                )): <tr><th>No Data Available</th></tr>}
            </tbody>
      </table>
      
    </div>
    </>
    
  );
}

export default List;
