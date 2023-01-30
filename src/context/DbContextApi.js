import React, { createContext, useEffect, useState } from 'react'

const problemsDbContext = createContext();


function DbContextApi({children}) {
    const [arr, setArr] = useState([]);
    const [subscribed, setSubscribed] = useState(false);
    console.log("context api called outside")
    // useEffect(() =>{
    //     const is = true;
    //     console.log("context api called")
    //     const getAll = async() =>{
    //         const records = await pb.collection('allproblems').getFullList();
    //         setArr(records)
    //     }

    //     if(is){
    //         getAll();
    //     }
    //     return () =>{
    //         is = false;
    //     }
    //     setSubscribed(true)
    // },[]);

    useEffect(() => {
        async function getData() {
          const actualData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
          .then(response => response.json());
          //console.log(actualData);
          setArr(actualData) ;
          setSubscribed(true)
        }
        getData()
    }, [])
    return(
        <problemsDbContext.Provider value={{arr, subscribed}}>
            {children}
        </problemsDbContext.Provider>
    )
}

export {DbContextApi, problemsDbContext};