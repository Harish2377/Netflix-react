import React,{ useState, useEffect} from 'react'
import './Banner.css';
import tmdbAxiosInstance from '../tmdbAxiosInstance';



function Banner({fetchurl}) {


    const [movies,setmovies]=useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";
    console.log(fetchurl);
  
  
    const fetchData = async ()=>{
      const {data} = await tmdbAxiosInstance.get(fetchurl)
  
       setmovies(data.results[Math.floor(Math.random()*data.results.length)])

    // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
      
    }
  
    console.log(movies);
  
    useEffect(()=>{
      fetchData()
    },[])
  



  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}/${movies?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>

      <div className="banner-content">
        <h1>{movies?.name}</h1>
        <h2>{movies?.overview?.slice(0,200)}...</h2>
      </div>



    </div>
  )
}

export default Banner