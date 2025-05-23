# SidePageRepairPage - Frontend UI Component

## 🚀 Project Overview

This project is a front-end implementation of the `SidePageRepairPage` component as per the provided Figma design. It includes a fully interactive and responsive layout for a game development-based UI. The component includes a tab system, a real-time queue, a drag-and-drop inventory management table, and a stylized history log.

## 🧪 Features Implemented

### ✅ Tab System

* **Tabs:** Queue, Table, and History
* **Behavior:** Tabs switch content dynamically with visual feedback for the active tab.

### ⏳ Queue Tab

* Shows multiple entries representing items under processing.
* Each item displays:

  * Item Name
  * Start Time, End Time
  * Remaining Time (live)
  * Progress Bar (updates in real-time)
* Items auto-remove on completion (when progress = 100%).
* Each item’s progress is independently tracked.

### 🛠️ Table & Inventory Tab

* **Drag-and-drop functionality** implemented between Inventory and Crafting Table.
* Supports partial and full stack movement.
* Accurate quantity updates in both source and destination.
* Edge cases handled:

  * Dropping onto a full slot.
  * Dropping partial quantity.
  * Cancelling drag midway.
  * Reverting dropped items if target is invalid.

### 🧾 History Tab

* Displays history cards with consistent styling and layout as per Figma.
* Includes visual metadata and action timestamps.

## 🎨 UI/UX Design

* Fully responsive layout.
* Matches Figma pixel-to-pixel (padding, spacing, font, layout).
* Hover, active, and dropzone visual states provided.
* Smooth interactions with no lag.

## 🔧 Tech Stack

* **Framework:** React.js
* **Styling:** Tailwind CSS
* **Drag & Drop:** `react-dnd`
* **Time handling:** Native JS Date and `setInterval`

## 📁 Project Structure

```
src/
├── components/
│   ├── SidePageRepairPage.jsx
│   ├── QueueTab.jsx
│   ├── TableTab.jsx
│   ├── HistoryTab.jsx
│   ├── InventoryItem.jsx
│   ├── HistoryCard.jsx
│   └── QueueItem.jsx
├── styles/
│   └── index.css
└── App.jsx
```

## 📦 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yourusername/repair-page-app.git
cd repair-page-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 📸 Screenshots

Screenshots have been included to demonstrate UI accuracy and functionality.
![App Screenshot](./Screenshots/snap1.png)

## 📖 Notes

* The project avoids use of any backend logic.
* All data is mocked for simulation.
* Includes code comments and modular component structure.

## 📌 Edge Cases Handled

* Real-time updates persist independently per queue item.
* Drag cancelation restores item state.
* Prevents overfilling slots during drag.
* Allows precise stack splits when moving quantities.

## ✅ Completion Status

* All tasks as per the problem statement have been successfully implemented.
* Project is ready for submission.

## 🔗 Submission

The complete source code and a working build have been uploaded to: \[GitHub Repo/Drive Link Here]

## 👨‍💻 Developer

**Name:** Ashutosh Kumar
**Role:** Front-End Developer
**Date:** May 23, 2025

---

Thank you for the opportunity!
