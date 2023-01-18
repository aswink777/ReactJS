import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {Button,Card} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { samplecontext} from './App';
import './pop.css';


function Pop(props) {
  const [first, setfirst] = useState([])
  const {sample,setsample,hide,sethide} = useContext(samplecontext)
  console.log(props.url);
  const imageUrl = "https://image.tmdb.org/t/p/original";
  
 useEffect(() => {
  axios.get(props.url).then((rus)=>{
    console.log(rus.data.results)
    setfirst(rus.data.results)
    setsample(first)
})
 }, [first,hide])
 console.log(sample);
 
  
  return (
    first.map((aus)=>
    <div>
        <Link to={`/Moviedetails/${aus.id}`}>
        <Card  style={{float:'left', width: '21.3rem', height:'550px', marginLeft:'20px', marginTop:'20px' }}>
        <Card.Img src={imageUrl+aus.poster_path  || imageUrl+aus.backdrop_path} style={{height:'300px'}}/>
      <Card.Body>
        <div><Card.Title>Title: {aus.title}</Card.Title></div>
        {/* <div><Card.Text>
        Genre_ids: {aus.genre_ids}
        </Card.Text></div> */}
        {/* <Card.Text>
        Id: {aus.id}
        </Card.Text> */}
        
        {/* <Card.Text>
        Original_title: {aus.original_title}
        </Card.Text> */}
        <Card.Text>
        Original_language: {aus.original_language}
        </Card.Text>
        {/* <Card.Text>
        Overview: {aus.overview}
        </Card.Text> */}
        {/* <Card.Text>
        Popularity: {aus.popularity}
        </Card.Text> */}
        <Card.Text>
        Release_date: {aus.release_date}
        </Card.Text>
        {/* <Card.Text>
        Vote_average: {aus.vote_average}
        </Card.Text>
        <Card.Text>
        Vote_count: {aus.vote_count}
        </Card.Text> */}
        <Button style={{marginTop:'20px'}} varient="primary">Button</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
  )
}

export default Pop