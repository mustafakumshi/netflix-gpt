import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import Netflix_Banner from "../assets/images/movies-banner.jpg"

const GptSearch = () => {
  return (
    <div>
     <div className='absolute -z-10'>
      <img src={Netflix_Banner} alt="banner" className='w-screen h-screen'/>
    </div> 
     <GptSearchBar/>
     <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
