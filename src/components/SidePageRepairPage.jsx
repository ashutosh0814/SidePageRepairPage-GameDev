import { useState } from "react";
import QueueTab from "./QueueTab";
import TableTab from "./TableTab";
import HistoryTab from "./HistoryTab";

const SidePageRepairPage = () => {
  const [activeTab, setActiveTab] = useState("Queue");

  const tabs = ["Queue", "Table", "History"];

  return (
    <div className="w-[367px] h-[883px] bg-[color:#1C2526] rounded-[16px] p-4 font-[Inter]">
      {/* Tabs */}
      <div className="flex justify-between mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center text-[14px] font-medium rounded-t-[8px] transition-colors duration-200 ${
              activeTab === tab
                ? "bg-[color:#2E3A3B] text-white border-b-2 border-[color:#A855F7]"
                : "bg-[color:#252F30] text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="h-[795px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {activeTab === "Queue" && <QueueTab />}
        {activeTab === "Table" && <TableTab />}
        {activeTab === "History" && <HistoryTab />}
      </div>
    </div>
  );
};

export default SidePageRepairPage;