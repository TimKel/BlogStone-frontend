import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet, Redirect } from "react-router-dom";
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Single from "./pages/Single"
import Write from "./pages/Write"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./style.scss"
import BlogStoneApi from './api/api';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './common/UserContext';
// import jwt from "jsonwebtoken";
import { useJwt, decodeToken } from "react-jwt";
import PrivateRoute from './common/PrivateRoutes';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "blogstone-token";

const Layout = () => {
  
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/post/:id",
//         element:<Single/>
//       },
//       {
//         path:"/write",
//         element:<Write/>
//       },
//     ]
//   },
//   { 
//     path: "/home",
//     element: <Home/>,
//   },
//   { 
//     path: "/login",
//     element: <Login/>,
//   },
//   { 
//     path: "/register",
//     element: <Register signup={signup} />,
//   },
//   { 
//     path: "/single",
//     element: <Single/>,
//   },
//   { 
//     path: "/write",
//     element: <Write/>,
//   },
// ]);

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/post/:id",
          element:<Single/>
        },
        {
          path:"/write",
          element:<Write/>
        },
      ]
    },
    { 
      path: "/home",
      element: <Home />,
    },
    { 
      path: "/login",
      element: <Login login={login} />,
    },
    { 
      path: "/register",
      element: <Register signup={signup} />,
    },
    { 
      path: "/single",
      element: <Single />,
    },
    { 
      path: "/write",
      element: <Write />,
    },
  ]);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser(){
      if (token) {
        try{
          let { username } = decodeToken(token);
          console.log("USERNAME", username)
          // put the token on the API class so it can use it to call the API.
          BlogStoneApi.token = token;
          console.log("TOKEN", token)
          let currentUser = await BlogStoneApi.getCurrentUser(username);
          console.log("CURRUSER", currentUser)
          setCurrentUser(currentUser);
          
        }catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  async function signup(signupData) {
    try {
      let token = await BlogStoneApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("Signup Failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
   async function login(loginData) {
    try {
      let token = await BlogStoneApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }
 
  /** Handles site-wide logout. */
  function logout() {
    console.log("HELLO")
    setCurrentUser(null);
    setToken(null);
   
    console.log("USER LOGGED OUT")
  }


  return (
    <div className="app">
      <div className="container">
        <UserContext.Provider  value={{currentUser, setCurrentUser, logout }}>
        <RouterProvider router={router}   />
        </UserContext.Provider>
      </div>
    </div>
  );
}


export default App;
