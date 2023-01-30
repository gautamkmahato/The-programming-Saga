import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

function Demo() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  
  const [arr, setArr] = useState([]);
  const [post, setPost] = useState();
  
  const addTodo = async () => {
    const todo = {
      title: "this is new title",
      description: "recoed gkm"
    }
    try {
      const record = await await pb.collection("test").create(todo);
      return record;
    } catch (error) {
        return { error: error.message };
    }
  };
  // you can also fetch all records at once via getFullList
  const data = async() =>{
    // you can also fetch all records at once via getFullList
    const records = await pb.collection('test').getFullList();
    setArr(records);
    console.log(records);
  }
  
// example update data
const updatedata = {
  "title": "test",
  "description": "test"
};

const update = async() =>{
  const record = await pb.collection('test').update('h0e44hco561b9dc', updatedata);
  console.log("data updated...")
}

const getOne = async(id) =>{
  const record = await pb.collection('test').getOne(id);
  console.log(record);
  setPost(record);
}

  useEffect(() => {
    data();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
      </header>
      <button onClick={addTodo}>add</button>
      <button onClick={update}>update</button>
      {arr.map((val, index) => (
        <>
          <div key={val.id}>
            <p>{val.title}</p>
            <button value={val.id} onClick={() => getOne(val.id)}>click</button>
          </div>
        </>
      ))}
      <hr />
      {post != null ? <div>
        <p>{post.title}</p>
        <p>{post.description}</p>
      </div> : <></>}
      
    </div>
    
  );
}

export default Demo;
