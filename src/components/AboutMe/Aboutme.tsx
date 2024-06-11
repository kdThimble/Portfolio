import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

import "./index.css";
import "animate.css";
import { LampContainer } from "../ui/lamp";

import Link from "next/link";
import Cloud from "../Cloud/Cloud";

const AboutMe = () => {
  return (
    <div className="bg-slate-950 w-[100%]">
      <div className="flex flex-col">
        <LampContainer className="">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            About Me <br />
          </motion.h1>
        </LampContainer>
        <div className="flex justify-between px-[50px] mt-[-13rem]">
          <div>
            {" "}
            <CardContainer className="inter-var ">
              <CardBody className="  relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]    h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="100"
                  className="text-[32px] items-center font-bold text-white"
                >
                  Meet Kundan
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="100"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hello there! I am Kundan Rajpurohit a full-stack developer
                  with a passion for crafting innovative and user-friendly
                  digital experiences. With a strong foundation in both
                  front-end and back-end development
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="80"
                  className="w-full mt-4 flex flex-row"
                >
                  <CardItem
                    as="div"
                    translateZ="20"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    I excel at designing and building scalable, efficient, and
                    visually appealing applications. My expertise spans a range
                    of technologies, including HTML, CSS, JavaScript, React,
                    Node.js, and various databases
                  </CardItem>
                  <Image
                    src="/assets/profilebnw.png"
                    height="130"
                    width="200"
                    className="h-[180px]  object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center ">
                  <CardItem
                    translateZ={50}
                    as={Link}
                    href="/aboutme"
                    target="__blank"
                    className="px-4  rounded-xl text-xs font-normal dark:text-white"
                  >
                    Know me more →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <Cloud />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
