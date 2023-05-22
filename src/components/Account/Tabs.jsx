import React from "react";
import { authStore } from "../../store/authStore";

const Tabs = () => {
  const sections = [{ label: "details" }, { label: "security" }];
  const { setActiveTab, activeTab } = authStore();

  const handleActiveTab = (e) => {
    setActiveTab(e.currentTarget.value);
  };

  return (
    <div className="Tabs_container flexdiv pb-4">
      {sections.map((section, index) => (
        <div key={index}>
          <h3>
            <button
              value={section.label}
              onClick={handleActiveTab}
              className={`${activeTab === section.label ? "validate scale-110 " : "cancel" } button `}
            >
              {section.label}
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
