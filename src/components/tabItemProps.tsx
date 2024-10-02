import React from "react";

interface TabItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ label, active, onClick }) => {
  return (
    <div
      className={`p-4 cursor-pointer ${
        active ? "text-white border-b-4 border-blue" : "text-graycolor2"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default TabItem;
