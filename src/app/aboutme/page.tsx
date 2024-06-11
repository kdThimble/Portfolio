import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Meteors } from "@/components/ui/meteors";
import React from "react";

const Page: React.FC = () => {
  const Skills = [
    {
      title: "Frontend Development",
      description:
        "Mastery in building dynamic user interfaces and interactive web applications using modern frontend frameworks like React, Nextjs. Nodejs Proficient in creating reusable components, managing state, and optimizing performance.",
      link: "https://stripe.com",
    },
    {
      title: "Backend Development ",
      description:
        "Extensive experience in backend development using Node.js, Express, and Prisma frameworks. Skilled in building scalable, RESTful APIs, handling authentication, authorization, and data management with databases like MongoDB, PostgreSQL, and MySQL.",
      link: "https://netflix.com",
    },
    {
      title: "Database Management",
      description:
        "Strong understanding of database management systems including MongoDB, PostgreSQL, and MySQL. Proficient in designing schemas, optimizing queries, and ensuring data integrity for efficient data storage and retrieval.",
      link: "https://google.com",
    },
    {
      title: "RESTful API Development",
      description:
        "Expertise in designing and implementing RESTful APIs for seamless communication between frontend and backend systems. Skilled in defining endpoints, request handling, authentication mechanisms, and data validation to ensure secure and efficient data transfer.",
      link: "https://meta.com",
    },
    {
      title: "Responsive Design and Cross-Browser Compatibility",
      description:
        "Proficient in creating responsive web designs that adapt to various screen sizes and devices. Experienced in ensuring cross-browser compatibility and adherence to web standards for consistent user experiences across different platforms and browsers",
      link: "https://amazon.com",
    },
    {
      title: "Version Control",
      description:
        "Proficient in version control systems like Git, GitHub, and Bitbucket for collaborative development and code management. Skilled in branching, merging, and resolving conflicts to maintain codebase integrity and facilitate team collaboration.",
      link: "https://microsoft.com",
    },
    {
      title: "Deployment and DevOps",
      description:
        "Familiarity with deployment pipelines and DevOps practices using tools like Docker, AWS, and Heroku. Experienced in containerization, continuous integration, and automated deployment processes to streamline application delivery and maintenance.",
      link: "https://meta.com",
    },
    {
      title: "Agile Methodologies and Project Management",
      description:
        "Knowledgeable in Agile methodologies like Scrum and Kanban for iterative development and project management. Skilled in sprint planning, backlog grooming, and sprint retrospectives to foster collaboration and deliver high-quality software products on time",
      link: "https://amazon.com",
    },
    {
      title: "Flutter Development",
      description:
        "Proficient in Flutter framework for building cross-platform mobile applications with native-like performance and user experience. Skilled in widget-based UI development, state management, and platform-specific integrations.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="w-full h-full relative flex flex-col items-center">
      <div className="mt-10">
        <img
          className="w-full h-full "
          src={"/assets/Background.png"}
          alt="Mountains front"
          id="mountains_front"
        />
        <div className="absolute top-[12rem] left-[13rem]">
          <span className=" font-san font-thin text-[3rem]">This is your</span>
          <br />
          <span className=" font-san font-thin text-[3rem]">Developer</span>
          <br />
          <span className=" font-mono font-bold text-[3rem] text-purple-600">
            Kundan Rajpurohit
          </span>
          <br />
          <div className="text-wrap w-[40%] mt-7">
            <span className=" font-inter text-gray-400 font-thin text-sm">
              Experienced Full Stack Developer proficient in frontend and
              backend technologies. Passionate about crafting innovative
              solutions and delivering seamless user experiences. Constantly
              learning and adapting to new technologies.
            </span>
          </div>
          <br />
        </div>
      </div>
      <div>
        <div className="mt-[5rem]">
          <div className="flex justify-center items-center">
            <span className="text-[#757272]">SPECIALITY</span>
            <br />
          </div>
          <div className="flex justify-center items-center mt-3">
            <span className="font-light font-inter text-[3rem] mr-2">My </span>
            <span className="font-light font-inter text-purple-600 text-[3rem]">
              {"\t Specialities"}
            </span>
          </div>
          <div className="flex mt-5  text-wrap text-center justify-center items-center">
            <span className="text-[#757272] w-[60%]">
              Expert Full Stack Developer adept at architecting robust
              solutions. Proficient in frontend frameworks like React and
              NextJs, with a strong grasp of backend technologies such as
              Node.js and Prisma. Passionate about creating seamless user
              experiences
            </span>
            <br />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={Skills} />
        </div>
      </div>
      <div>
        <div className="mt-[5rem]">
          <div className="flex justify-center items-center">
            <span className="text-[#757272]">SERVICES</span>
            <br />
          </div>
          <div className="flex justify-center items-center mt-3">
            <span className="font-light font-inter text-[3rem] mr-2">My </span>
            <span className="font-light font-inter text-purple-600 text-[3rem]">
              {"\t Other Services"}
            </span>
          </div>
          <div className="flex mt-5  text-wrap text-center justify-center items-center">
            <span className="text-[#757272] w-[60%]">
              Here are some of the services I offer to help you with your
              project I offer both web development and app development services.
            </span>
            <br />
          </div>
        </div>
      </div>
      <Meteors number={20} />
      <div className="mt-10 flex gap-[12rem] justify-center  w-full mb-[10rem]">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-5 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl  w-[25rem] bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className=" ">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Full Stack Development
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Embark on a journey of digital transformation with our Full
                Stack Development service. From frontend marvels to robust
                backend architectures, we specialize in crafting dynamic web
                solutions that elevate businesses. With expertise in modern
                technologies, we engineer scalable and secure applications,
                ensuring your online presence thrives in the digital landscape.
              </p>
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className=" w-full relative max-w-xs ">
          <div className="absolute inset-5 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl  w-[25rem] bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className=" ">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                App Devlopment
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Welcome to our Flutter app development service, where innovation
                meets efficiency. With Flutter's cross-platform capabilities, we
                craft stunning mobile applications tailored to your needs. From
                sleek UI designs to seamless user experiences, our team delivers
                high-quality apps that captivate and engage users across iOS and
                Android platforms.
              </p>
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

 