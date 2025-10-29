import React from "react";

const Greetings = ({ lang, children }) => {
  let greeting;

    switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fi":
      greeting = "Hei";
      break;
    default:
      greeting = "Hello";
  }

  return <div style={{ border: "1px solid black", padding: "10px", margin: "5px", width: "200px" }}>
    {greeting} {children}
  </div>;
};

export default Greetings;
