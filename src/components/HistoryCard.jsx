const HistoryCard = ({ item }) => {
  return (
    <div className="bg-[color:#252F30] rounded-[12px] p-3 flex items-center">
      <img
        src={`/src/assets/${item.image}`}
        alt={item.name}
        className="w-12 h-12 rounded-[8px] mr-3"
      />
      <div>
        <p className="text-white text-[14px] font-medium">{item.name}</p>
        <p className="text-gray-400 text-[12px] font-normal mt-1">{item.date}</p>
      </div>
    </div>
  );
};

export default HistoryCard;