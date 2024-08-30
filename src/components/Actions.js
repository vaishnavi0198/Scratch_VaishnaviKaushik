import React from "react";

function Actions({ selectedLabel, setSelectedAction }) {
  const actions = {
    motion: ["Move Right", "Move Left", "Jump", "Crouch"],
    looks: ["Change Color", "Change Size", "Rotate", "Fade"]
  };

  return (
    <div className="actions">
      {selectedLabel && actions[selectedLabel].map((action, index) => (
        <button key={index} onClick={() => setSelectedAction(action)}>
          {action}
        </button>
      ))}
    </div>
  );
}

export default Actions;
