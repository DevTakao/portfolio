import WallpaperImage from "@assets/images/cyber_world.jpg";
import { motion } from "framer-motion";
import { useAppStore } from "@store/appStore";
import ScrollGuide from "./ScrollGuide";

const HeroSection = () => {
  const { isHomePageLoading: loading, setHomePageLoading: setLoading } = useAppStore();

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div>
      <div className="h-screen bg-light relative">
        <div
          data-loading={loading}
          className="absolute z-0 w-full h-full bg-left data-[loading=true]:[clipPath:circle(0%_at_0%_0%)] data-[loading=false]:[clipPath:circle(69.7%_at_24%_36%)] transition-all duration-[2000ms] ease-in"
        >
          <img onLoad={handleImageLoaded} src={WallpaperImage} className="block w-full h-full object-cover bg-top" />
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
      <div className="Introduction h-[50vh] text-center">
        <div className="h-full max-w-screen-md mx-auto flex flex-col items-center justify-center px-6">
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
            Hello, my name is <strong className="text-yellow">Takao</strong>.
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
            I&apos;m a daydreaming Technical Research Analyst & Web Developer. I love cats 🐱 and drinking tea 🍵. As
            you may have already guessed, I love animes and video games. This whole website has been inspired by them.
            Hope you enjoy your visit!
            <br />
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
