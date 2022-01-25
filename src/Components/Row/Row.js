import React, {useState, useEffect} from "react"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import axios from '../../axios'
import './Row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'
const Row = ({title, fetchUrl, isLargeRow}) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    playerVars: {
      autoplay: 1,
    },
    height: "390",
    width: "100%"
  }

  const handleClick = (movie) => {
    console.log('clicked', movie)
    if(trailerUrl) {
      console.log('if trailer', trailerUrl)
      setTrailerUrl('')
    } else {
      console.log('else trailer')
      movieTrailer(movie?.name || movie?.original_name || movie?.title || '')
      .then((url) => {
        console.log('URL', url)
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((error) => console.log(error))
    }
  }
  return (
    <div className="row">
      <h2>{ title }</h2>
      <div className="row-posters">
        {
          movies.map((movie, item) => {
            return (
              <img
                alt={`${movie.title}`}
                className={`row-post ${isLargeRow && 'row_postLarge'}`}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              />
            )
          })
        }
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row
