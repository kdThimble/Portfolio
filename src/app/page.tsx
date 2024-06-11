"use client";

import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe/Aboutme";
import ContactForm from "@/components/ContactMe/ContactMe";

export default function Home() {
  // const [isSmall, setIsSmall] = useState(false);

  // const handleResize = () => {
  //   if (window.innerWidth <= 1062) {
  //     setIsSmall(true);
  //   } else {
  //     setIsSmall(false);
  //   }
  // };

  // useEffect(() => {
  //   handleResize(); // Set initial value
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="bg-black min-h-screen w-[100%] overflow-clip">
      <Intro />
      <AboutMe />
      
      <ContactForm />
    </div>
  );
}
