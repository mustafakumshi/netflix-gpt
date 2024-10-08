import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const selectedLanguage = useSelector(store => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[selectedLanguage].gptSearchPlaceholder} />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">{lang[selectedLanguage].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
