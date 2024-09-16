import Netflix_Logo from "../assets/images/movies-logo.png";
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email: email, displayName: displayName, photoUrl : photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='logo absolute w-screen p-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src={Netflix_Logo} alt="logo" />
      {user && (<div className='flex p-2'>
        {showGptSearch && (<select name="" id="" className="p-2 m-2 bg-gray-900 text-white cursor-pointer" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "Gpt Search"}</button>
        <img src={user?.photoUrl} alt={user?.displayName} className='w-12 h-12 rounded-sm'/>
        <button onClick={handleSignOut} className='mx-1 font-bold text-white'>(SignOut)</button>
      </div>)}
    </div>
  )
}

export default Header;
