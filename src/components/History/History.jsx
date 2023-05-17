import React, {  useEffect } from "react";
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
    <div className="History_container my-12 container mx-auto">
      <div className="MonthTabs_container">
        <MonthTabs />
      </div>
      <div className="HistoryDetails_container mt-12">
        <HistoryDetails />
      </div>
    </div>
  );
};

export default History;
