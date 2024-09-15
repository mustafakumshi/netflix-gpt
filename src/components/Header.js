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

const Header = () => {

  const user = useSelector(store => store.user);

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

  return (
    <div className='logo absolute w-screen p-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src={Netflix_Logo} alt="logo" />
      {user && (<div className='flex p-2'>
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
        <img src={user?.photoUrl} alt={user?.displayName} className='w-12 h-12 rounded-sm'/>
        <button onClick={handleSignOut} className='mx-1 font-bold text-white'>(SignOut)</button>
      </div>)}
    </div>
  )
}

export default Header;
