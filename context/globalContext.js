"use client"
import React, { useState, createContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const router = useRouter();
  const [toggleDark, setToggleDark] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [toggleUpdateCard, setToggleUpdateCard] = useState(false);
  const [toggleNotificationCard, setToggleNotificationCard] = useState(false);
  const [toggleUserProfile, setToggleUserProfile] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [userData, setUserData] = useState({});

  // login function
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('jwtToken')}`
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        setUserData(data.user);
        console.log(data.user)
        
        // Save the tokens in cookies
        Cookies.set('authToken', token, { expires: 7 });


        // Registration successful, handle success scenario
        toast.success('🦄 Welcome to SIGMANODE!', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        router.push('/');
      } else {
        const data = await response.json();
        console.error(data.error);
        toast.error(data.error, {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // logout function
  const handleLogout = () => {
    Cookies.remove('authToken');
    setUserData({});
    router.push('/login');
  }

  const handleOnChangeValue = (e) => {
    const { name, value } = e.target;

    if (name === 'Email') {
      setLoginEmail(value);
    }
    else if (name === 'Password') {
      setLoginPassword(value);
    }
  };

  const handleToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  const handleToggleDark = () => {
    setToggleDark(!toggleDark);
  };

  const handleToggleSearchBar = () => {
    setToggleSearchBar(!toggleSearchBar)
  }

  const handleToggleUpdateCard = () => {
    setToggleUpdateCard(!toggleUpdateCard)
  }
  const handleToggleNotificationCard = () => {
    setToggleNotificationCard(!toggleNotificationCard)
  }

  const handleToggleUserProfile = () => {
    setToggleUserProfile(!toggleUserProfile)
  }




  return (
    <GlobalContext.Provider value={{ handleLogout,userData, handleOnChangeValue, loginPassword, loginEmail, handleFormSubmit, handleToggleUserProfile, toggleUserProfile, handleToggleNotificationCard, toggleNotificationCard, toggleDark, toggleMenu, handleToggleMenu, handleToggleDark, toggleSearchBar, handleToggleSearchBar, handleToggleUpdateCard, toggleUpdateCard }}>
      {children}
    </GlobalContext.Provider>
  );
};
