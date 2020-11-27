import React from "react";
import "./styles.css";
import Admin from "./Components/Admin";

export default function App() {
  return (
    <div className="App">
      <h1>Leaders Board</h1>
      <Admin name="Hira Shaikh" university="University Of Sindh" score={348} />
      <Admin name="Aliza" university="MUET" score={230} />
      <Admin name="Kanwal" university="NUST" score={321} />
    </div>
  );
}
