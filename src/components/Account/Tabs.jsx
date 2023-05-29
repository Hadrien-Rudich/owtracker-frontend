import React from 'react';
import authStore from '../../store/authStore';

function Tabs() {
  const sections = [{ label: 'details' }, { label: 'security' }];
  const { setActiveTab, activeTab } = authStore();

  const handleActiveTab = (e) => {
    setActiveTab(e.currentTarget.value);
  };

  return (
    <div className="Tabs_container flexdiv pb-4 relative top-4">
      {sections.map((section) => (
        <div key={section}>
          <h2>
            <button
              value={section.label}
              onClick={handleActiveTab}
              className={`${
                activeTab === section.label ? ' active' : 'inactive'
              }   
                accounttab flexdiv`}
              type="button"
            >
              {section.label}
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
