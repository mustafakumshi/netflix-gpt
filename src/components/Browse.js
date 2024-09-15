import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useHorrorMovies from '../hooks/useHorrorMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  useNowPlayingMovies();
  useHorrorMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const isGptValid = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Header/>
      {isGptValid ? <GptSearch/> :  <><MainContainer/><SecondaryContainer/></>}
    </div>
  )
}

export default Browse;
