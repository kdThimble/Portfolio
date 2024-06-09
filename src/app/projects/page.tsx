import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import { SparklesCore } from "@/components/ui/sparkles";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Nike Store ",
    link: "https://nikeshopease.netlify.app/",
    thumbnail: "/assets/nike.png",
  },
  {
    title: "Cine-View",
    link: "https://cineview-app.netlify.app/",
    thumbnail: "/assets/cineview.png",
  },
  {
    title: "Musical Academy",
    link: "https://musicalacademy.netlify.app/",
    thumbnail: "/assets/musical.png",
  },

  {
    title: "Hotel bhabha",
    link: "https://hotel-bhabha.vercel.app/",
    thumbnail: "/assets/hotelbhabha.png",
  },
  {
    title: "ChefKart",
    link: "https://thechefkart.com/",
    thumbnail: "/assets/chefkart.png",
  },

  {
    title: "Cine-View",
    link: "https://cineview-app.netlify.app/",
    thumbnail: "/assets/cineview.png",
  },
  {
    title: "Musical Academy",
    link: "https://musicalacademy.netlify.app/",
    thumbnail: "/assets/musical.png",
  },
  {
    title: "Nike Store ",
    link: "https://nikeshopease.netlify.app/",
    thumbnail: "/assets/nike.png",
  },

  {
    title: "Hotel bhabha",
    link: "https://hotel-bhabha.vercel.app/",
    thumbnail: "/assets/hotelbhabha.png",
  },
  {
    title: "ChefKart",
    link: "https://thechefkart.com/",
    thumbnail: "/assets/chefkart.png",
  },
];

export default function Projects() {
  return (
    <div className="bg-slate-950 w-full h-full pb-3">
      <div className="h-[20rem] w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md pt-4">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Projects
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
      <HeroParallax products={products} />
    </div>
  );
}
