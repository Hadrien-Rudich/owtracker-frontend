import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";
import { historyStore } from "../../store/historyStore";

import { fetchHistoryData } from "../../services/ApiService";
import MonthTabs from "./MonthTabs";
import HistoryDetails from "./HistoryDetails";

const History = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { addHistoryData } = historyStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
    [isLoggedIn, navigate];
  });

  useEffect(() => {
    async function getHistoryData() {
      try {
        const data = await fetchHistoryData();
        addHistoryData(data);
      } catch (error) {
        console.error("Failed to fetch history data", error);
      }
    }

    getHistoryData();
  }, [addHistoryData]);

  return (
    <div className="History_container flex flex-col py-6">
      <div className="MonthTabs_container">
        <MonthTabs />
      </div>
      <div className="HistoryDetails_container">
        <HistoryDetails />
      </div>
    </div>
  );
};

export default History;
