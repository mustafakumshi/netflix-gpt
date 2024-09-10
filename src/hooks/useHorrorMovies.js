import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addHorrorMovies } from '../utils/moviesSlice';

const useHorrorMovies = () => {

    // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27', API_OPTIONS);
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  }

  useEffect(() => {
    getHorrorMovies();
  }, []);

};

export default useHorrorMovies