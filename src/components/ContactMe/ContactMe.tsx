import React, { useState } from "react";

import "./index.css";
import TrackVisibility from "react-on-screen";
import ToolTips from "../ToolTips";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";

const ContactForm = () => {
  const initialState = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [buttonText, setButtonText] = useState("Send Message!");
  const inValidFields = { email: false, message: false };
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const words = [
    {
      text: "Don't",
    },
    {
      text: "Feel",
    },
    {
      text: "Shy",
    },

    {
      text: "Contact Me.",
      className: "text-purple-400 dark:text-purple-400",
    },
  ];

  return (
    <div
      className="section-division bg-slate-950"
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div className="h-[20rem] w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Contact Me
        </h1>
        <div className="w-[40rem] h-[10rem] relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[40rem] mt-[-7rem] ">
        <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
          "Let's Connect and Create Something Amazing Together!"
        </p>
        <TypewriterEffect words={words} />
        <p className="text-white dark:text-neutral-200 text-base  mt-10">
          Email :{" "}
          <a
            href={`mailto:kundanrajpurohit221@gmail.com`}
            className="text-purple-400"
          >
            {"kundanrajpurohit221@gmail.com"}
          </a>{" "}
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <Link href="/contact">
          <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm">
            Contact me
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
