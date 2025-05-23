const QueueItem = ({ item, number }) => {
  const radius = 29; // Adjusted for 64px circle with 6px stroke
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (item.progress / 100) * circumference;

  return (
    <div className="bg-[color:#252F30] rounded-[12px] p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-white text-[12px] font-normal mr-7">
            {number}
          </span>
          <div>
            <p className="text-white text-[14px] font-medium">{item.name}</p>
            <p className="text-white text-[12px] font-normal mt-1">
              {item.startTime} - {item.endTime}
            </p>
          </div>
        </div>
        <div className="relative w-16 h-16">
          <svg height="64" width="64" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#DBD8DB" />
              </linearGradient>
            </defs>
            <circle
              stroke="#1C2526"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx="32"
              cy="32"
            />
            <circle
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx="32"
              cy="32"
              transform="rotate(-90 32 32)"
            />
            <text
              x="32"
              y="32"
              textAnchor="middle"
              dy=".3em"
              fill="white"
              fontSize="16"
              fontWeight="500"
            >
              {Math.round(item.progress)}%
            </text>
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-white text-[12px] font-normal">
          {item.remainingTime} Remaining Time
        </span>
        <span className="text-white text-[12px] font-normal">
          {item.status}
        </span>
      </div>
    </div>
  );
};

export default QueueItem;