import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Heroes from "./Heroes/Heroes";
import Result from "./Result";
import Reset from "./Reset";
import SubmitForm from "./SubmitForm";
import Overview from "./Overview";

import { authStore } from "../../store/authStore";
import Mapo from "./Maps/Mapo";
import MapsTypes from "./Maps/MapsTypes";

const Gamereport = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
                                                                          
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    [isLoggedIn, navigate];
  });

  return (
    <div className="main_container my-4">
      <Result />
      <div className="mapandheroes_container">
        <Heroes />
        {/* <Mapo /> */}

        <MapsTypes />
      </div>
      <div>

      <Overview/>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <Reset />

        <SubmitForm />
      </div>
    </div>
  );
};

export default Gamereport;
