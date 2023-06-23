import React, { useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';



function Banner() {
    const [movie, setmovie] = useState([])
    



    useEffect(()=> {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        return requests;
    }
            // Math.floor(Math.random() * request.data.results.length - 1):- This is basically use to 
            // grab the numbers in the array
    fetchData();
}, []);
console.log(movie);

    // Start>>>> A function to shorten a description or words
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str; 
    }
    // <<<<<<< Stop

  return (
    <header className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",    
        }}
    >
        <div className="banner_content">
            <h2 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h2>

            <div className="banner_buttons">
                <button className="banner_buttton">Play</button>
                <button className="banner_buttton">My List</button>
            </div>
            <div className="banner_description">
                <h2>{truncate(movie?.overview, 200)}</h2>
            </div>
        </div>
        <div className="banner--fadeBottom"/>
       
    </header>
  )
}

export default Banner