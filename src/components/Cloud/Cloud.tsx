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
      var tagcloud = TagCloud(".Sphere", Texts, {
        radius: 250,

        maxSpeed: "normal",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      });
    }
    return () => (effectRan.current = true);
  }, []);

  return (
    <div >
      <div className="Sphere md:flex justify-center d-none sm:block"></div>
    </div>
  );
};

export default Cloud;
