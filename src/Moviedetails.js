import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { samplecontext } from './App';

function Moviedetails() {
  const [first, setfirst] = useState([])
    const data=useParams()
    console.log(data.id);
    
    const imageUrl = "https://image.tmdb.org/t/p/original";

    const {sample,setsample,hide,sethide}=useContext(samplecontext)

    useEffect(()=>{
      sethide(true)
    },[])


    
    console.log(sample);
  
    const ids =sample.map((val)=>val.id)
    const datas = sample.filter( (sample) => sample.id === parseInt(data.id) );
    console.log(datas);
  
// const ids = first.map((val)=>val.id)
//     const datas = first.find((value)=> value.id ===  parseInt(data.id))
//     console.log(datas);

  return (
    <div style={{color:'white'}}>
      {datas[0] &&  
      <>
      <img style={{height:'650px',width:'1467px'}} src={imageUrl+datas[0]?.poster_path || imageUrl+datas[0]?.backdrop_path } />
      <h1>ID:{ datas[0]?.id}</h1>
      <h1>TITLE:{ datas[0]?.title}</h1>
      <h1>ORIGINAL LANGUAGE:{ datas[0]?.original_language}</h1>
      </>
      }
    </div>
  )
}

export default Moviedetails