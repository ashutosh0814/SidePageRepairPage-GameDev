import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import InventoryItem from "./InventoryItem";
import { useState } from "react";

const TableTab = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Barrel Assault Rifle",
      quantity: 2,
      image: "barrel-assault-rifle.png",
    },
    {
      id: 2,
      name: "Front Port Assault Rifle",
      quantity: 2,
      image: "front-port-assault-rifle.png",
    },
    { id: 3, name: "Barrel P", quantity: 2, image: "barrel-p.png" },
    {
      id: 4,
      name: "Pistol Suppressor",
      quantity: 2,
      image: "pistol-suppressor.png",
    },
    {
      id: 5,
      name: "Pistol Suppressor",
      quantity: 2,
      image: "pistol-suppressor.png",
    },
    {
      id: 6,
      name: "Pistol Suppressor",
      quantity: 2,
      image: "pistol-suppressor.png",
    },
  ]);

  const [craftingTable, setCraftingTable] = useState([
    {
      id: 7,
      name: "Barrel Assault Rifle",
      quantity: 2,
      image: "barrel-assault-rifle.png",
    },
    {
      id: 8,
      name: "Front Port Assault Rifle",
      quantity: 2,
      image: "front-port-assault-rifle.png",
    },
    { id: 9, name: "Barrel P", quantity: 2, image: "barrel-p.png" },
  ]);

  const [hoveredItem, setHoveredItem] = useState(null);

  const moveItem = (draggedItem, targetItem, fromInventory, quantity = 1) => {
    if (quantity <= 0) return;

    const isSameSection = fromInventory === !targetItem?.isInventory;

    if (fromInventory) {
      const newInventory = [...inventory];
      const itemIndex = newInventory.findIndex((i) => i.id === draggedItem.id);
      
      if (itemIndex === -1 || newInventory[itemIndex].quantity < quantity) return;

      newInventory[itemIndex].quantity -= quantity;
      if (newInventory[itemIndex].quantity === 0) {
        newInventory.splice(itemIndex, 1);
      }

      const newCraftingTable = [...craftingTable];
      if (targetItem && !isSameSection) {
        const targetIndex = newCraftingTable.findIndex((i) => i.id === targetItem.id);
        if (targetIndex !== -1 && newCraftingTable[targetIndex].name === draggedItem.name) {
          newCraftingTable[targetIndex].quantity += quantity;
        } else {
          newCraftingTable.push({ ...draggedItem, quantity });
        }
      } else {
        const existingItemIndex = newCraftingTable.findIndex((i) => i.id === draggedItem.id);
        if (existingItemIndex !== -1) {
          newCraftingTable[existingItemIndex].quantity += quantity;
        } else {
          newCraftingTable.push({ ...draggedItem, quantity });
        }
      }

      setInventory(newInventory);
      setCraftingTable(newCraftingTable);
    } else {
      const newCraftingTable = [...craftingTable];
      const itemIndex = newCraftingTable.findIndex((i) => i.id === draggedItem.id);
      
      if (itemIndex === -1 || newCraftingTable[itemIndex].quantity < quantity) return;

      newCraftingTable[itemIndex].quantity -= quantity;
      if (newCraftingTable[itemIndex].quantity === 0) {
        newCraftingTable.splice(itemIndex, 1);
      }

      const newInventory = [...inventory];
      if (targetItem && !isSameSection) {
        const targetIndex = newInventory.findIndex((i) => i.id === targetItem.id);
        if (targetIndex !== -1 && newInventory[targetIndex].name === draggedItem.name) {
          newInventory[targetIndex].quantity += quantity;
        } else {
          newInventory.push({ ...draggedItem, quantity });
        }
      } else {
        const existingItemIndex = newInventory.findIndex((i) => i.id === draggedItem.id);
        if (existingItemIndex !== -1) {
          newInventory[existingItemIndex].quantity += quantity;
        } else {
          newInventory.push({ ...draggedItem, quantity });
        }
      }

      setCraftingTable(newCraftingTable);
      setInventory(newInventory);
    }
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        <div>
          <h3 className="text-white text-[14px] font-medium mb-3">Inventory</h3>
          <div className="grid grid-cols-3 gap-3 overflow-visible">
            {inventory.map((item) => (
              <InventoryItem
                key={item.id}
                item={item}
                isInventory={true}
                moveItem={moveItem}
                onHover={handleItemHover}
                onLeave={handleItemLeave}
                isHovered={hoveredItem?.id === item.id}
              />
            ))}
            {Array.from({ length: 6 - inventory.length }).map((_, index) => (
              <div
                key={`empty-inventory-${index}`}
                className="bg-[color:#252F30] rounded-[8px] h-[90px] w-[103px]"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-[14px] font-medium mb-3">
            Crafting Table
          </h3>
          <div className="grid grid-cols-3 gap-3 overflow-visible">
            {craftingTable.map((item) => (
              <InventoryItem
                key={item.id}
                item={item}
                isInventory={false}
                moveItem={moveItem}
                onHover={handleItemHover}
                onLeave={handleItemLeave}
                isHovered={hoveredItem?.id === item.id}
              />
            ))}
            {Array.from({ length: 3 - craftingTable.length }).map(
              (_, index) => (
                <div
                  key={`empty-crafting-${index}`}
                  className="bg-[color:#252F30] rounded-[8px] h-[90px] w-[103px]"
                />
              )
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default TableTab;