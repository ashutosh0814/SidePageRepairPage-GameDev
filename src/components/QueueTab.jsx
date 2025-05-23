import { useState, useEffect } from "react";
import QueueItem from "./QueueItem";

const QueueTab = () => {
  const mockItems = [
    {
      id: 1,
      name: "Repair Kit",
      startTime: "07:32 AM",
      endTime: "09:32 AM",
      remainingTime: 45,
      progress: 65,
      status: "Ongoing",
    },
    {
      id: 2,
      name: "Pistol Neon Fu",
      startTime: "07:07 AM",
      endTime: "09:07 AM",
      remainingTime: 20,
      progress: 85,
      status: "Ongoing",
    },
    {
      id: 3,
      name: "Energy Cell",
      startTime: "08:15 AM",
      endTime: "10:15 AM",
      remainingTime: 95,
      progress: 25,
      status: "Ongoing",
    },
    {
      id: 4,
      name: "Armor Plating",
      startTime: "09:00 AM",
      endTime: "11:30 AM",
      remainingTime: 180,
      progress: 10,
      status: "Queued",
    },
  ];

  const [queueItems, setQueueItems] = useState(mockItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueueItems((prevItems) =>
        prevItems.map((item) => {
          // Simulate progress animation for demo purposes
          let newProgress = item.progress + Math.random() * 2;
          let newRemainingTime = item.remainingTime;
          let newStatus = item.status;

          if (newProgress > 100) {
            newProgress = 100;
            newStatus = "Completed";
            newRemainingTime = 0;
          } else if (newProgress < 100 && item.status !== "Queued") {
            newStatus = "Ongoing";
            newRemainingTime = Math.max(newRemainingTime - 1, 0);
          }

          return {
            ...item,
            progress: newProgress,
            remainingTime: newRemainingTime,
            status: newStatus,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {queueItems.map((item, index) => (
        <QueueItem key={item.id} item={item} number={index + 1} />
      ))}
    </div>
  );
};

export default QueueTab;