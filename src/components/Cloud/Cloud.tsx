"use client";
import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "./index.css";


const Cloud = () => {
  const effectRan = useRef(false);

  const Texts = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Bootstrap",
    "Node",
    "express",
    "mongoDB",
    "Dart",
    "C++",
    "python",
    "Java",
    "Flutter",
    "Git",
    "Github",
    "DBMS",
    "Machine Learning",
    "SASS",
    "JSON",
    "App dev",
    "SQL",
    "Tailwind",
    "Nextjs",
  ];

  useEffect(() => {
    if (effectRan.current === false) {
      const sphereElement = document.querySelector(".Sphere");
      if (sphereElement) {
        TagCloud([sphereElement], Texts, {
          radius: 250,
          maxSpeed: "normal",
          initSpeed: "fast",
          deceleration: 135,
          keep: true,
        });
      }
    }
    return () => {
      effectRan.current = true;
      // If you have any cleanup logic, place it here
    };
  }, []);


  return (
    <div >
      <div className="Sphere md:flex justify-center d-none sm:block"></div>
    </div>
  );
};

export default Cloud;
