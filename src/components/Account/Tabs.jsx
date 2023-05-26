import React from "react";
import { authStore } from "../../store/authStore";

const Tabs = () => {
  const sections = [{ label: "details" }, { label: "security" }];
  const { setActiveTab, activeTab } = authStore();

  const handleActiveTab = (e) => {
    setActiveTab(e.currentTarget.value);
  };

  return (
    <div className="Tabs_container flexdiv pb-4 relative top-4">
      {sections.map((section, index) => (
        <div key={index}>
          <h2>
            <button
              value={section.label}
              onClick={handleActiveTab}
              className={`${activeTab === section.label ? 
                " active " 
                : "inactive " }   
                accounttab flex justify-center items-center`}
            >
              {section.label}
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
