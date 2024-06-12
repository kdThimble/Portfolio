"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/utils/cn";
import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  
  IconPhoneCall,
  IconMail,
  IconLocation,
} from "@tabler/icons-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ContactPage: React.FC = () => {
  const words = ["Better", "Responsive", "Beautiful", "Modern"];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="w-full h-full bg-neutral-950 ">
      <div className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Connect with Me
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to my Portfolio hope you like it. Don't forget to check
            projects and if you want to connect with me, Feel free to contact me
            on call,mail or whatsapp.. Don't be shy to say hi.
          </p>
        </div>
        <BackgroundBeams />
      </div>

      <div className="flex flex-wrap ">
        <div className="md:w-[50%] w-full flex flex-col">
          <div className="h-[10rem] flex justify-center items-center m-5 md:m-0 px-4">
            <div className="text-3xl md:text-4xl mx-auto font-normal  text-neutral-400">
              Build
              <FlipWords words={words} /> <br />
              websites with Kundan
            </div>
          </div>
          <div className="w-[60%] relative flex flex-col justify-center md:ml-[4rem] ml-5 mt-10   p-10 items-start gap-10">
            <h1 className="font-bold text-[2rem] text-neutral-200">
              Contact Information
            </h1>
            <div className="flex gap-5 items-center justify-start">
              <IconPhoneCall className="h-6 w-6 text-neutral-800 dark:text-neutral-300" />
              <p className="text-neutral-500 text-xl dark:text-neutral-300">
                +91-9811725084
              </p>
            </div>
            <div className="flex gap-5 items-center justify-start">
              <IconMail className="h-6 w-6 text-neutral-800 dark:text-neutral-300" />
              <p className="text-neutral-500 text-xl dark:text-neutral-300">
                Kundanrajpurohit221@gmail.com
              </p>
            </div>
            <div className="flex gap-5 items-center justify-start">
              <IconLocation className="h-6 w-6 text-neutral-800 dark:text-neutral-300" />
              <p className="text-neutral-500 text-xl dark:text-neutral-300">
                Shahdara Delhi 110032
              </p>
            </div>
            <div className="absolute bottom-0 md:block hidden right-0">
              <img src="/assets/circlepic.png" alt="loda" />
            </div>
            <div className="mt-[3rem]"></div>
          </div>
        </div>
        <div className="max-w-md w-full md:mx-auto mx-3 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Connect with me
          </h2>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="KD" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Rajpurohit" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Say hi" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Input id="message" placeholder="hi....there" type="text" />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                onClick={() =>
                  window.open("https://github.com/kdThimble", "_blank")
                }
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kundan-singh-rajpurohit-816aa220a",
                    "_blank"
                  )
                }
              >
                <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Linked In
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10"></div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactPage;
