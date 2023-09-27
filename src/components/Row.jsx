import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css'

function Row({title,fetchurl,isPoster}) {

  const [allMovies,setAllMovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";
  console.log(fetchurl);


  const fetchData = async ()=>{
    const {data} = await tmdbAxiosInstance.get(fetchurl)

    setAllMovies(data.results)
    
  }

  console.log(allMovies);

  useEffect(()=>{
    fetchData()
  },[])



  return (
    
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
        {
          allMovies?.map(item=>(
            <img className={` ${isPoster&& 'movie-poster'} movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }

      </div>
    </div>
  )
}

export default Row