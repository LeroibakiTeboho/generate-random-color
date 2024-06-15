import React, { useEffect, useState } from "react";

function RandomColor() {
  // || useStates
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // || useEffect
  useEffect(() => {
    if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor])

  // || Handlers

  function randomColorUtitlity(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtitlity(hex.length)]; 
    }

    setColor(hexColor)
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtitlity(256);
    const g = randomColorUtitlity(256);
    const b = randomColorUtitlity(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX COlor</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div style={{
        position: "absolute",
        top: "50%",
        color: "#fff",
        fontSize: "3rem"
       
      }}>
        {typeOfColor} 
        <br/>
        <br/>
        {color}
      </div>
    </div>
    
  );
}

export default RandomColor;
