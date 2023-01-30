import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Card() {
  const imgUrlDB = {
    img1: `${process.env.REACT_APP_PB_URL}/api/files/images/ojkximkhvmkxu91/back34_iMyTPoU84I.jpg`,
    img2: `${process.env.REACT_APP_PB_URL}/api/files/images/p15ybrcijjrh0an/back28_weYWD4K8X4.jpeg`,
    img3: `${process.env.REACT_APP_PB_URL}/api/files/images/920pyjo5vqlvce3/back21_rq8E0rGbaB.jpg`,
    img4: `${process.env.REACT_APP_PB_URL}/api/files/images/vgcsyid2ocnshfd/back23_Eo2I9GlivM.jpg`,
    img5: `${process.env.REACT_APP_PB_URL}/api/files/images/vs1m7bzite1wbgm/back26_lUmMwWIccN.jpg`,
    img6: `${process.env.REACT_APP_PB_URL}/api/files/images/nuf02si6vsgp3yc/back31_GbfIVvsI4N.jpg`,
    img7: `${process.env.REACT_APP_PB_URL}/api/files/images/wow3opqzyoxzdb4/back37_sAYWIEDiCx.jpg`,
    img8: `${process.env.REACT_APP_PB_URL}/api/files/images/zcw7k5beuw9a8sj/back39_PJwyZS0dTE.jpg`,
    img9: `${process.env.REACT_APP_PB_URL}/api/files/images/0spdw5uiu21ecw4/back40_A6S4hDuXNc.jfif`,
    img10: `${process.env.REACT_APP_PB_URL}/api/files/images/erbify8yvm9irm2/back41_Gg8aGWTpb5.jfif`,
    img11: `${process.env.REACT_APP_PB_URL}/api/files/images/g8m9r9pavukgs5u/back42_Q0pMWmVaXk.jfif`,
    img12: `${process.env.REACT_APP_PB_URL}/api/files/images/7mv05bmq3em672l/back46_D1qqqRtxu1.jpg`,
    img13: `${process.env.REACT_APP_PB_URL}/api/files/images/ley4bdzhs3sz81b/back47_jE4BUqwgGp.jpg`,
    img14: `${process.env.REACT_APP_PB_URL}/api/files/images/mz7xa9qx5y13psy/back48_OdWaIVJnBS.jpg`,
    img15: `${process.env.REACT_APP_PB_URL}/api/files/images/fqwbfhvhri251wr/back49_qJSzXYnaop.jpg`,
  };

  const [dyCount, setdyCount] = useState(0);
  const [arrCount, setarrCount] = useState(0);
  const [algoCount, setalgoCount] = useState(0);
  const [BSCount, setBSCount] = useState(0);
  const [treeCount, settreeCount] = useState(0);
  const [grapgCount, setgrapgCount] = useState(0);
  const [recurCount, setrecurCount] = useState(0);
  const [strCount, setstrCount] = useState(0);
  const [linkCount, setlinkCount] = useState(0);
  const [mathCount, setmathCount] = useState(0);
  const [stCount, setstCount] = useState(0);
  const [qCount, setqCount] = useState(0);
  const [sortCount, setsortCount] = useState(0);

  

  // you can also fetch all records at once via getFullList
  useEffect(() => {
    async function getData() {
      const actualData = await axios.get(
        `${process.env.REACT_APP_PB_URL}/api/collections/allproblems/records`
      );
      console.log(actualData.data.items);
  
      actualData.data.items.forEach((element) => {
        if (element.category === "dynamic programming") {
          setdyCount((c) => c + 1);
        } else if (element.category === "array") {
          setarrCount((c) => c + 1);
        } else if (element.category === "array") {
          setBSCount((c) => c + 1);
        } else if (element.category === "array") {
          settreeCount((c) => c + 1);
        } else if (element.category === "array") {
          setrecurCount((c) => c + 1);
        } else if (element.category === "array") {
          setlinkCount((c) => c + 1);
        } else if (element.category === "array") {
          setstCount((c) => c + 1);
        } else if (element.category === "array") {
          setstrCount((c) => c + 1);
        } else if (element.category === "array") {
          setsortCount((c) => c + 1);
        } else if (element.category === "array") {
          setmathCount((c) => c + 1);
        } else if (element.category === "array") {
          setgrapgCount((c) => c + 1);
        } else if (element.category === "array") {
          setalgoCount((c) => c + 1);
        } else if (element.category === "array") {
          setqCount((c) => c + 1);
        }
      });
  
      return actualData;
    }
    getData();
  }, []);

  return (
    <div>
      <div className="card-container">
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img1 + '")' }}
        >
          <div className="card-content">
            <h3>Algorithms</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{algoCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img2 + '")' }}
        >
          <div className="card-content">
            <h3>Array</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{arrCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img13 + '")' }}
        >
          <div className="card-content">
            <h3>Binary Search</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{BSCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img4 + '")' }}
        >
          <div className="card-content">
            <h3>Dynamic Programming</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{dyCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img5 + '")' }}
        >
          <div className="card-content">
            <h3>Graph</h3>
            <div className="card-data">
              <p>
                Questions{" "}
                <span style={{ fontWeight: "600" }}>{grapgCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img9 + '")' }}
        >
          <div className="card-content">
            <h3>Linked List</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{linkCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img10 + '")' }}
        >
          <div className="card-content">
            <h3>Math</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{mathCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img6 + '")' }}
        >
          <div className="card-content">
            <h3>Queue</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{qCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img7 + '")' }}
        >
          <div className="card-content">
            <h3>Recursion & Backtracking</h3>
            <div className="card-data">
              <p>
                Questions{" "}
                <span style={{ fontWeight: "600" }}>{recurCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img11 + '")' }}
        >
          <div className="card-content">
            <h3>Sorting</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{sortCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img8 + '")' }}
        >
          <div className="card-content">
            <h3>Stack</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{stCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img14 + '")' }}
        >
          <div className="card-content">
            <h3>String</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{strCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundImage: 'url("' + imgUrlDB.img12 + '")' }}
        >
          <div className="card-content">
            <h3>Tree</h3>
            <div className="card-data">
              <p>
                Questions <span style={{ fontWeight: "600" }}>{treeCount}</span>
              </p>
              <Link to="/problems/dynamic-programming">
                <button>Start Learning</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
