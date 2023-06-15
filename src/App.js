import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShackEdit from './pages/ShackEdit';
import ShackIndex from './pages/ShackIndex';
import ShackNew from './pages/ShackNew';
import ShackProtectedIndex from './pages/ShackProtectedIndex';
import ShackShow from './pages/ShackShow';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import mockUsers from "./mockUsers";
import mockShacks from './mockShacks';

const App = () => {
  

  const [currentUser, setCurrentUser] = useState(null)
  const [shacks, setShacks] = useState(mockShacks)

  console.log(currentUser)
  const signup = () => {

  }

  const login = (currentUser) => {
    console.log("Login", currentUser)
  }

  // const logout = (currentUser) => {
  //   currentUser = null
  //   console.log("Logout?", currentUser)
  // }

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/shackedit" element={<ShackEdit />} />
        <Route path="/shackindex" element={<ShackIndex shacks={shacks}/>} />
        <Route path="/shacknew" element={<ShackNew />} />
        <Route path="/shackprotectedindex" element={<ShackProtectedIndex />} />
        <Route path="/shackshow/:id" element={<ShackShow shacks={shacks}/>} />
        <Route path="/login" element={<LogIn 
        login={login}
        currentUser={currentUser} 
        />} />
        <Route path="/signup" element={<SignUp currentUser={currentUser}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
