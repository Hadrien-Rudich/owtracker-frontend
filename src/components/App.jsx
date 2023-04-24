import React, { createContext } from "react";

import { Routes, Route } from "react-router-dom";

import Gamereport from "./GameReport/GameReport";
import Header from "./Header";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";
import HomePage from "./HomePage";
import History from "./History/History";
import Account from "./Account";
import Profile from "./Profiles/Profiles";
import Stats from "./Stats";
import Maps from "./GameReport/Maps/MapsCarousel";


export const LogContext = createContext();

function App() {

  return (
    <div className="text-center">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/game" element={<Gamereport />} />
        <Route path="/history" element={<History />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profiles" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/slick" element={<Maps />} />
      </Routes>
    </div>
  );
}

export default App;
