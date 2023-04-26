import React, { createContext } from "react";

import { Routes, Route } from "react-router-dom";

import Gamereport from "./GameReport/GameReport";
import Header from "./Header";
import LogInForm from "./Homepage/LogInForm";
import RegisterForm from "./Homepage/RegisterForm";
import HomePage from "./Homepage/HomePage";
import History from "./History/History";
import Account from "./Account";
import ProfilesPage from "../components/Profiles/ProfilesPages";
import Stats from "./Stats/Stats";
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
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/slick" element={<Maps />} />
      </Routes>
    </div>
  );
}

export default App;
