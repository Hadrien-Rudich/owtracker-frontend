import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Heroes from "./Heroes/Heroes";
import Result from "./Result";
import Reset from "./Reset";
import SubmitForm from "./SubmitForm";
import Overview from "./Overview";

import { authStore } from "../../store/authStore";
import Maps from "./Maps/Maps";

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
    <div className="gamereport_container my-12">
      <Result />
      <Heroes />
      <Maps />
      <Overview />

      <div className="flex flex-row justify-center gap-10">
        <Reset />

        <SubmitForm />
      </div>
    </div>
  );
};

export default Gamereport;
