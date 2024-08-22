import React from 'react'
import Netflix_Logo from "../assets/images/movies-logo.png";
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(store => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='logo absolute w-screen p-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src={Netflix_Logo} alt="logo" />
      {user && (<div className='flex p-2'>
        <img src={user?.photoUrl} alt={user?.displayName} className='w-12 h-12'/>
        <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
      </div>)}
    </div>
  )
}

export default Header;
