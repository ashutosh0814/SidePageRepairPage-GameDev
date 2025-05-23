import HistoryCard from "./HistoryCard";

const HistoryTab = () => {
  const historyItems = [
    {
      id: 1,
      name: "Repair Kit",
      date: "2024-06-17 16:07",
      image: "repair-kit.png",
    },
    {
      id: 2,
      name: "Bolt Assembly",
      date: "2024-02-17 11:26",
      image: "bolt-assembly.png",
    },
    {
      id: 3,
      name: "Hammer P",
      date: "2024-01-19 08:15",
      image: "hammer-p.png",
    },
  ];

  return (
    <div className="space-y-4">
      {historyItems.map((item) => (
        <HistoryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HistoryTab;