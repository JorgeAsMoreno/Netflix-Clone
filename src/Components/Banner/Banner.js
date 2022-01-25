import React, { useState, useEffect } from "react";
import axios from '../../axios'
import requests from '../../request'
import './Banner.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'
const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ])
      return request
    }
    fetchData()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
      >
      <div className="banner__contents">
        <h1 className="banner__title">
        {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button-play"><i class="fas fa-play"></i>Play</button>
          <button className="banner__button-list"><i class="fas fa-info-circle"></i>More Information</button>
          <h2 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h2>
        </div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  )
}

export default Banner
