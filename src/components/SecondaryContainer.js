import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList key={'Now Playing'} title={'Now Playing'} movies={movies.nowPlayingMovies}/>
      <MovieList key={'Popular'} title={'Popular'} movies={movies.popularMovies}/>
      <MovieList key={'Top Rated'} title={'Top Rated'} movies={movies.topRatedMovies}/>
      <MovieList key={'Upcoming'} title={'Upcoming'} movies={movies.upcomingMovies}/>
      <MovieList key={'Horror'} title={'Horror'} movies={movies.horrorMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
