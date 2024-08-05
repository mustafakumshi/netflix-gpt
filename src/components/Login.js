import React from 'react'
import Header from './Header';
import Netflix_Banner from "../assets/images/netflix-banner.jpg"

const Login = () => {
    return (
        <div>
          <Header/>
          <div>
            <img src={Netflix_Banner} alt="banner" />
          </div>
        </div>
    )
}

export default Login;
