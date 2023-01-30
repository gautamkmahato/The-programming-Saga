import React, { useState } from 'react';
import Display from '../pages/Display';
import Navbar from './Navbar';
import '../App.css';
import Solution from '../pages/Solution';


function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Description',
      content: <Display />
    },
    {
      title: 'Solutions',
      content: <Solution />
    },
    {
      title: 'Explanation',
      content: 'Content for tab 3'
    },
    {
        title: 'Practice',
        content: 'Content for tab 3'
    },
    {
      title: 'Notes',
      content: 'Content for tab 3'
  }
  ];

  function handleClick(index) {
    setActiveTab(index);
  }

  return (
    <>
        <Navbar />
        <div className='tabs-container'>
            <div className="tabs">
                <div className="tab-nav">
                    {tabs.map((tab, index) => (
                    <button
                        key={tab.title}
                        className={`tab-nav-item ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}                  >
                        {tab.title}
                    </button>
                    ))}
                </div>
                <div className="tab-content">
                    {tabs.map((tab, index) => (
                    <div
                        key={tab.title}
                        className={`tab-item ${activeTab === index ? 'active' : ''}`}>
                        {tab.content}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}


export default Tabs;
