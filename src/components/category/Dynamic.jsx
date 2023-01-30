import React from 'react';
import Navbar from '../Navbar';
import Small from '../Small';

function Dynamic() {
  
  const imgUrl = `${process.env.REACT_APP_PB_URL}/api/files/images/vgcsyid2ocnshfd/back23_Eo2I9GlivM.jpg`
  
  return (
    <>
    <Navbar />
      <h2 style={{marginLeft: "8%"}}>Dynamic Programming</h2>
      <div className="card-container">
      <Small img={imgUrl} title='Fabonacci Series' sub='fabonacci series'/>
      <Small img={imgUrl} title='0/1 Knapsack' sub='01 Knapsack'/>
      <Small img={imgUrl} title='Frog Jump' sub='01 Knapsack' />
      <Small img={imgUrl} title='Target Sum' sub='target sum' />
      <Small img={imgUrl} title='Unbounded Knapsack' sub='Unbounded sum' />
      <Small img={imgUrl} title='Subset Sum' sub='fabonacci series'/>
      <Small img={imgUrl} title='Longest Common Subsequence' sub='fabonacci series'/>
      <Small img={imgUrl} title='Longest Common Substring' sub='fabonacci series' />
      <Small img={imgUrl} title='Longest Increasing Subsequence' sub='fabonacci series' />
      <Small img={imgUrl} title='Best time to buy and Sell' sub='best time to buy and sell' />
      <Small img={imgUrl} title='Linear DP' sub='best time to buy and sell' />
      </div>
    </>
  )
}

export default Dynamic