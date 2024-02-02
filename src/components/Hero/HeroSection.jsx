import { useState, useEffect } from "react";
import WallpaperImage from "@assets/images/cyber_world.jpg";
import { motion } from "framer-motion";
import { useAppStore } from "@store/appStore";
import ScrollGuide from "./ScrollGuide";
import CatSvg from "@common/CatSvg";
import useNarrator from "@/hooks/useNarrator";

const HeroSection = () => {
  const narrateRef = useNarrator("Hello. I will be your tour guide for this visit.");
  const { isHomePageLoading: loading, setHomePageLoading: setLoading } = useAppStore();

  const [secretClickCounter, setSecretClickCounter] = useState(0);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (secretClickCounter >= 5) {
      alert(`Hey, you found a secret note: I have a girlfriend whom I call "Ma".`);
      setSecretClickCounter(0);
    }
  }, [secretClickCounter]);

  return (
    <div ref={narrateRef}>
      <div className="h-screen bg-light relative">
        <div
          data-loading={loading}
          className="absolute z-0 w-full h-full bg-left data-[loading=true]:[clipPath:circle(0%_at_0%_0%)] data-[loading=false]:[clipPath:circle(69.7%_at_24%_36%)] transition-all duration-[2000ms] ease-in"
        >
          <img
            onLoad={handleImageLoaded}
            data-loading={loading}
            src={WallpaperImage}
            className="block w-full h-full object-cover bg-top data-[loading=true]:scale-150 data-[loading=false]:scale-100 transition-all duration-[2000ms] ease-in"
          />
        </div>

        <div className="absolute z-[1] right-0 px-3 md:pr-12 max-w-sm text-right">
          <div className="relative flex items-center h-screen">
            <div className="inline-block relative">
              <h1
                data-loading={loading}
                className="relative z-[1] text-light text-6xl uppercase data-[loading=true]:opacity-0 data-[loading=false]:opacity-100 delay-[1500ms] transition-opacity duration-700"
                style={{ textShadow: "0 2px 6px #4dc1ff, 2px 0 6px #4dc1ff, 0 -2px 6px #4dc1ff, -2px 0 6px #4dc1ff" }}
              >
                Welcome to my World
              </h1>
            </div>
            {!loading && <ScrollGuide />}
          </div>
        </div>
      </div>
      <div className="Introduction h-[50vh] text-center relative">
        <div className="SVG_BG w-[clamp(100px,25vw,200px)] absolute z-[0] bottom-0 left-5 opacity-10">
          <CatSvg />
        </div>
        <div className="Main relative z-[1] h-full max-w-screen-md mx-auto flex flex-col items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.2, ease: [0.05, 0.67, 0.99, 0.94] },
            }}
            viewport={{ once: true }}
            className="text-xl"
          >
            Hello, my name is <strong className="text-blue">Takao</strong>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1.2, ease: [0.05, 0.67, 0.99, 0.94] },
            }}
            viewport={{ once: true }}
          >
            I&apos;m a daydreaming Technical Research Analyst & Web Developer. I love cats{" "}
            <span className="select-none" onClick={() => setSecretClickCounter((prev) => prev + 1)}>
              🐱
            </span>{" "}
            and drinking tea 🍵. As you may have already guessed, I love animes and video games. This whole website has
            been inspired by them. Hope you enjoy your visit!
            <br />
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
