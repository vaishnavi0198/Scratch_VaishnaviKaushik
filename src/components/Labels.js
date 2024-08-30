import React from "react";

function Labels({ setSelectedLabel }) {
  return (
    <div className="labels">
      <button onClick={() => setSelectedLabel("motion")}>Motion</button>
      <button onClick={() => setSelectedLabel("looks")}>Looks</button>
    </div>
  );
}

export default Labels;
