import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pb from '../lib/pocketbase'

const imageDB = {
    amazon: "http://127.0.0.1:8090/api/files/images/4vth52hr851tktm/amazon_uEfKWFSrsf.png",
    microsoft: "http://127.0.0.1:8090/api/files/images/nop5hifsfgp7al1/microsoft_3fgPsNsTf6.png",
    google: "http://127.0.0.1:8090/api/files/images/d66bn7yda6hg7ot/google_BQUxgPMEmf.png",
    meta: "http://127.0.0.1:8090/api/files/images/w7le47p360qk758/facebook_a3mbb1i9Yg.png",
    netflix: "http://127.0.0.1:8090/api/files/images/i8znyfu0glkla8z/netflix_0BEjBT1ggM.png",
    leetcode: "http://127.0.0.1:8090/api/files/images/4hfgk9pjhowj4h7/leetcode_NfKF65KpJf.png",
    codeStudio: "http://127.0.0.1:8090/api/files/images/aantgl0b90lunds/codestudio_logo_fEKA9PSJw4.png",
    gfg: "http://127.0.0.1:8090/api/files/images/53v58xfobawr6mr/gfg_logo_Ofhs22JPZu.png"
}

function Display() {
    const [post, setPost] = useState();
    const [color, setColor] = useState();
    const [bgColor, setBgColor] = useState();
    const [borderColor, setborderColor] = useState();

    const { id } = useParams();

    const getColor = (record) =>{
        if(record.difficulty === 'Easy'){
            setColor('#00AF9B');
            setBgColor('#D3FEC0');
        }
        else if(record.difficulty === 'Medium'){
            setColor('#FFB800');
            setBgColor('#FEECB2');
        }
        else if(record.difficulty === 'Hard'){
            setColor('#FF006E');
            setBgColor('#FEB2CF');
        }
    }
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
        else if(companyName === 'leetcode'){
            return imageDB.netflix;
        }
    }
    const getPlatform = (record) =>{
        console.log(record)
        if(record.platform){
            var sampUrl = new URL(record.platform);
            if(sampUrl.host === 'leetcode.com'){
                //setborderColor('#00753C');
                return imageDB.leetcode;
            }
            else if(sampUrl.host === 'www.codingninjas.com'){
                //setborderColor('#00753C');
                return imageDB.codeStudio;
            }
            else if(sampUrl.host === 'www.geeksforgeeks.org'){
                ;//setborderColor('#00753C');
                return imageDB.gfg;
            }
        }
    }
    const getPlatformColor = (record) =>{
        if(record.platform){
            var sampUrl = new URL(record.platform);
            if(sampUrl.hostname === 'leetcode.com'){
                console.log("leet")
                setborderColor('#FFC800');
            }
            else if(sampUrl.hostname === 'www.codingninjas.com'){
                console.log("coding")
                setborderColor('#FF3700');
            }
            else if(sampUrl.hostname === 'www.geeksforgeeks.org'){
                console.log("gfg")
                setborderColor('#00753C');
            }
        }
    }

    
    useEffect(() =>{
        const getOne = async() =>{
            const record = await pb.collection('allproblems').getOne(id);
            console.log(record)
            
            setPost(record);
            getColor(record);
            getCompany(record);
            getPlatformColor(record)
        }
        getOne();
    },[id]);
    
    return (
        <>
            {post != null ? <div>
                <div className="post-container">
                    <div className="section-1">
                        <p>{post.title}</p>
                    </div>
                    <div className="section-2">
                        <div className='difficulty'>
                            <p style={{backgroundColor: bgColor, color: color}}>{post.difficulty}</p>
                        </div>
                        <div className='status'>
                        {post.status ? <p><i className="fa-regular fa-square-check"></i></p> : <p><i className="fa-solid fa-square-xmark"></i></p>}
                        </div>
                        <div className='like'>
                            <p><i className="fa-regular fa-thumbs-up"></i> {post.like}</p>
                        </div>
                        <div className='dislike'>
                            <p><i className="fa-regular fa-thumbs-down"></i> {post.dislike}</p>
                        </div>
                        <div className='platform'>
                            <p> 
                                <a href={post.platform} target="_blank" rel="noreferrer">
                                    <img style={{border: `2px solid ${borderColor}`}} src={getPlatform(post)} alt=""></img>
                                </a>
                            </p>
                            
                        </div>

                    </div>
                </div>
                <div className='company'>
                   
                    {post.company.map((val, index) =>(
                        <div key={index}>
                            <img src={getCompany(val)} alt="" />
                        </div>
                    ))}
                </div>
                <div>
                    {post.description != null ? <p style={{fontSize: "17px", lineHeight: "1.75rem", color: "#333"}}>{post.description}</p> : <p>Not found</p>}
                </div>

                {post.input_output.map((val, index) =>(
                    
                    <div key={index}>
                        <div>
                            <p style={{fontWeight: "600"}}>Example {index+1}</p>
                        </div>
                        <div className='input_output'>
                            <p><span style={{fontWeight: 600}}>Input:</span> {val.input}</p>
                            <p><span style={{fontWeight: 600}}>Output:</span> {val.output}</p>
                            <p><span style={{fontWeight: 600}}>Explanation:</span> {val.explanation}</p>
                        </div>
                    </div>
                    
                ))}
            </div> : <></>}
        </>
    )
}

export default Display