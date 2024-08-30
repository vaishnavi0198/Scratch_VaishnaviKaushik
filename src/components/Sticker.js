import React, { useState } from "react";
import CatSprite from './CatSprite';

function Sticker({ selectedAction }) {
  const [style, setStyle] = useState({});

  const performAction = (action) => {
    switch (action) {
      case "Move Right":
        setStyle({ transform: "translateX(20px)" });
        break;
      case "Move Left":
        setStyle({ transform: "translateX(-20px)" });
        break;
      case "Jump":
        setStyle({ transform: "translateY(-20px)" });
        break;
      case "Crouch":
        setStyle({ transform: "translateY(20px)" });
        break;
      case "Change Color":
        setStyle({ backgroundColor: "blue" });
        break;
      case "Change Size":
        setStyle({ transform: "scale(1.5)" });
        break;
      case "Rotate":
        setStyle({ transform: "rotate(45deg)" });
        break;
      case "Fade":
        setStyle({ opacity: 0.5 });
        break;
      default:
        setStyle({});
    }
  };

  return (
    <div className="sticker" style={style}>
     <CatSprite />
      {selectedAction && <p>Action: {selectedAction}</p>}
      <button onClick={() => performAction(selectedAction)}>Perform Action</button>
    </div>
  );
}

export default Sticker;
