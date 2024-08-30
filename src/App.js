import React, { useState } from "react";
import CatSprite from "./CatSprite";

export default function App() {
  // States for controlling CatSprite
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [visibility, setVisibility] = useState(true);
  const [activeTab, setActiveTab] = useState("motion"); // Default to motion tab
  const [droppedActions, setDroppedActions] = useState([]); // Track dropped actions

  // Action Handlers
  const actions = {
    moveUp: () => setPosition((prev) => ({ ...prev, y: prev.y - 10 })),
    moveDown: () => setPosition((prev) => ({ ...prev, y: prev.y + 10 })),
    moveLeft: () => setPosition((prev) => ({ ...prev, x: prev.x - 10 })),
    moveRight: () => setPosition((prev) => ({ ...prev, x: prev.x + 10 })),
    enlarge: () => setScale((prev) => prev + 0.1),
    shrink: () => setScale((prev) => Math.max(0.1, prev - 0.1)),
    rotateLeft: () => setRotation((prev) => prev - 15),
    rotateRight: () => setRotation((prev) => prev + 15),
    hide: () => setVisibility(false),
    show: () => setVisibility(true),
  };

  // Handle Drag Start
  const handleDragStart = (action) => (event) => {
    event.dataTransfer.setData("action", action);
  };

  // Handle Drop
  const handleDrop = (event) => {
    event.preventDefault();
    const action = event.dataTransfer.getData("action");
    setDroppedActions((prevActions) => [...prevActions, action]);
  };

  // Allow Drop
  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow a drop
  };

  // Execute actions in the droppedActions array
  const runActions = () => {
    droppedActions.forEach((action) => {
      if (actions[action]) actions[action](); // Check if action exists and execute
    });
  };

  // Clear dropped actions
  const clearActions = () => {
    setDroppedActions([]);
  };

  // Style for CatSprite based on state
  const catStyle = {
    transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
    display: visibility ? "block" : "none",
  };

  // Common button style
  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#6c63ff",
    color: "white",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  // Circle button style
  const circleButtonStyle = {
    ...buttonStyle,
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    fontSize: "14px",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  // Tab button style
  const tabButtonStyle = {
    ...circleButtonStyle,
    backgroundColor: "#6c63ff",
    color: "white",
    border: "2px solid #6c63ff",
  };

  // Tab heading style
  const headingStyle = {
    fontSize: "14px",
    textAlign: "center",
    marginTop: "10px",
    color: "#333",
  };

  // Actions column style
  const actionsStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRight: "1px solid #ccc",
  };

  // Blank column style
  const blankColumnStyle = {
    flex: 1,
    backgroundColor: "#e6e6e6",
    borderRight: "1px solid #ccc",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  // Main container style
  const containerStyle = {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f5",
  };

  return (
    <div style={containerStyle}>
      {/* Column 1: Tab Navigation */}
      <div style={{ flex: 1, padding: "10px", borderRight: "1px solid #ccc", backgroundColor: "#fff" }}>
        <div>
          <button
            onClick={() => setActiveTab("motion")}
            style={activeTab === "motion" ? { ...tabButtonStyle, backgroundColor: "#4b4bff" } : tabButtonStyle}
          >
            Motion
          </button>
        </div>
        <div>
          <button
            onClick={() => setActiveTab("looks")}
            style={activeTab === "looks" ? { ...tabButtonStyle, backgroundColor: "#4b4bff" } : tabButtonStyle}
          >
            Looks
          </button>
        </div>
      </div>

      {/* Column 2: Actions */}
      <div style={actionsStyle}>
        {activeTab === "motion" && (
          <>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Motion Actions</h3>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("moveUp")}
              onClick={actions.moveUp}
              draggable
            >
              Move Up
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("moveDown")}
              onClick={actions.moveDown}
              draggable
            >
              Move Down
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("moveLeft")}
              onClick={actions.moveLeft}
              draggable
            >
              Move Left
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("moveRight")}
              onClick={actions.moveRight}
              draggable
            >
              Move Right
            </button>
          </>
        )}

        {activeTab === "looks" && (
          <>
            <h3 style={{ color: "#333", marginBottom: "10px" }}>Looks Actions</h3>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("enlarge")}
              onClick={actions.enlarge}
              draggable
            >
              Enlarge
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("shrink")}
              onClick={actions.shrink}
              draggable
            >
              Shrink
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("rotateLeft")}
              onClick={actions.rotateLeft}
              draggable
            >
              Rotate Left
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("rotateRight")}
              onClick={actions.rotateRight}
              draggable
            >
              Rotate Right
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("hide")}
              onClick={actions.hide}
              draggable
            >
              Hide
            </button>
            <button
              style={buttonStyle}
              onDragStart={handleDragStart("show")}
              onClick={actions.show}
              draggable
            >
              Show
            </button>
          </>
        )}
      </div>

      {/* New Blank Column for Dropping Actions */}
      <div style={blankColumnStyle} onDrop={handleDrop} onDragOver={handleDragOver}>
        <p style={{ textAlign: "center", color: "#666" }}>Drop actions here</p>
        <div>
          {droppedActions.map((action, index) => (
            <button key={index} style={buttonStyle} onClick={actions[action]}>
                           {action.charAt(0).toUpperCase() + action.slice(1)}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "10px" }}>
          <button style={{ ...buttonStyle, backgroundColor: "#4caf50" }} onClick={runActions}>Run Actions</button>
          <button style={{ ...buttonStyle, backgroundColor: "#ff6347", marginLeft: "10px" }} onClick={clearActions}>Clear</button>
        </div>
      </div>

      {/* Column 4: CatSprite */}
      <div
        style={{
          flex: 3,
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e6e6e6",
        }}
      >
        <div style={catStyle}>
          <CatSprite />
        </div>
      </div>
    </div>
  );
}

