import { useDrag, useDrop } from "react-dnd";

const InventoryItem = ({ item, isInventory, moveItem, onHover, onLeave, isHovered }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { ...item, isInventory },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (droppedItem) => {
      if (droppedItem.id === item.id && droppedItem.isInventory === !isInventory) return;
      moveItem(droppedItem, item, droppedItem.isInventory);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`relative bg-[color:#252F30] rounded-[8px] p-2 text-center h-[90px] w-[103px] flex flex-col transition-all duration-200 ${
        isDragging ? "opacity-50" : ""
      } ${isOver ? "border-2 border-[color:#A855F7]" : ""} ${
        isHovered ? "transform scale-105 z-10 shadow-lg shadow-[color:#A855F7]/30" : "hover:transform hover:scale-105 hover:z-10 hover:shadow-lg hover:shadow-[color:#A855F7]/20"
      }`}
      style={{
        transformOrigin: 'center',
      }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={onLeave}
    >
      <div className="flex-shrink-0 w-full mb-1">
        <div className="text-white text-[9px] font-normal leading-[1] text-center overflow-hidden w-full">
          <div className="w-full" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}>
            {item.name}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mb-1 overflow-hidden">
        <img
          src={`/src/assets/${item.image}`}
          alt={item.name}
          className="max-w-[60px] max-h-[60px] object-contain rounded-[4px]"
        />
      </div>
      <div className="flex-shrink-0 flex items-center justify-center">
        <span className="text-gray-300 text-[12px] font-normal whitespace-nowrap">
          x{item.quantity}
        </span>
      </div>
    </div>
  );
};

export default InventoryItem;