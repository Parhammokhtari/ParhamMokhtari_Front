import React from "react";
import "./../index.css";

export default function ToolBar({ text }) {
  return (
    <nav className="navbar navbar-light bg-primary d-inline-block w-100 py-3">
      <h3 className="white">{text}</h3>
    </nav>
  );
}
