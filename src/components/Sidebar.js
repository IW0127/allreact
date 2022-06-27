import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Sidebar() {
  const SidebarLinks = [
    {
      title: "MAIN CONCEPTS",
    },
    {
      title: "Home",
      to: "/home",
    },
    {
      title: "Project1",
      to: "/project1",
    },
    {
      title: "Jsx",
      to: "/jsx",
    },
    {
      title: "Rendering Elements",
      to: "/rendering-elements",
    },
    {
      title: "Form",
      to: "/form",
    },
    {
      title: "Lifting State Up",
      to: "/Lifting-State-Up",
    },
    {
      title: "Composition vs Inheritance",
      to: "/Composition-inheritance",
    },
    {
      title: "ADVANCED GUIDES",
    },
    {
      title: "Accessibility",
      to: "/accessibility",
    },
    {
      title: "Code-Splitting",
      to: "/code-splitting",
    },
    {
      title: "About",
      to: "/about",
    },
  ];
  function activeClass(event) {
    const id = event.target.pathname;
    setActive(id);
  }
  const [activeSide, setActive] = useState(0);
  return (
    <div className="p-3 border-end overflow-auto" style={{ height: "92vh" }}>
      <div className="list-group">
        {SidebarLinks.map((nameLink, id) => {
          if (nameLink.to) {
            return (
              <Link
                className={`list-group-item list-group-item-action 
              ${nameLink.to === window.location.pathname ? "active" : ""}
               ${nameLink.to === activeSide ? "active" : ""} `}
                data-id={id}
                to={nameLink.to}
                key={id}
                onClick={activeClass}
              >
                {nameLink.title}
              </Link>
            );
          } else {
            return (
              <Link
                className="list-group-item list-group-item-action"
                data-id={id}
                to="#"
                key={id}
                style={{ fontWeight: "bold" }}
              >
                {nameLink.title}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}