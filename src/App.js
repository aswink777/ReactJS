
import './App.css';
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Nbar from './Nbar';
import Pop from './Pop';
import Banner from './Banner';
import Moviedetails from './Moviedetails';
import { createContext, useState } from 'react';
const samplecontext=createContext()


function App() {
  const [sample, setsample] = useState([])
  const[hide,sethide]=useState(false);
  const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
  
  const ComedyMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
  const LatestMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
  const PopularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
  return (
    
      
     <div className="App" > 
      <samplecontext.Provider value={{sample,setsample,hide,sethide}}>
      <BrowserRouter>
      <Nbar />
      {hide === false ? <Banner />:""}
      
      <Routes>
        <Route path="/Pop" element={<Pop url={PopularMovies} />} />
        <Route path="/Lat" element={<Pop url={LatestMovies}/>} />
        <Route path="/Com" element={<Pop url={ComedyMovies}/>} />
        <Route path="/Moviedetails/:id" element={<Moviedetails/>} />
      </Routes>
      </BrowserRouter>
      </samplecontext.Provider>
      </div>
      );
}

export default App;
export {samplecontext}
