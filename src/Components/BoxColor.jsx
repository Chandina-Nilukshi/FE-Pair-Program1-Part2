import React from "react";

const BoxColor = ({ r, g, b }) => {
  
  const rgbToHex = (value) => value.toString(16).padStart(2, "0");
  const hex = `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;


  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: r + g + b > 382 ? "black" : "white", // text color based on brightness
    width: "300px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px auto",
    borderRadius: "10px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: "1.2em",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  };

  return <div style={boxStyle}>{hex}</div>;
};

export default BoxColor;
