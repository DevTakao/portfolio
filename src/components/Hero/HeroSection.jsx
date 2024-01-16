import WallpaperVideo from "@assets/videos/wallpaper.mp4";
import { motion } from "framer-motion";
import { useAppStore } from "@store/appStore";

const HeroSection = () => {
  const { isHomePageLoading: loading, setHomePageLoading: setLoading } = useAppStore();

  const handleVideoLoadStart = () => {
    setLoading(true);
  };

  const handleVideoLoadedData = () => {
    setLoading(false);
  };

  return (
    <div>
      <div className="h-screen bg-light relative">
        <div
          data-loading={loading}
          className="absolute z-0 w-full h-full bg-left data-[loading=true]:[clipPath:circle(0%_at_0%_0%)] data-[loading=false]:[clipPath:circle(69.7%_at_24%_36%)] transition-all duration-[2000ms] ease-in"
        >
          <video
            onLoadStart={handleVideoLoadStart}
            onLoadedData={handleVideoLoadedData}
            src={WallpaperVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute z-[1] right-0 flex items-center h-full px-3 md:pr-12 max-w-sm text-right">
          <h1
            data-loading={loading}
            className="text-dark text-6xl uppercase data-[loading=true]:opacity-0 data-[loading=false]:opacity-100 delay-[1500ms] transition-opacity duration-700"
            style={{ textShadow: "0 2px 6px white, 2px 0 6px white, 0 -2px 6px white, -2px 0 6px white" }}
          >
            Welcome to my World
          </h1>
        </div>
      </div>
      <div className="h-[50vh] text-center">
        <div className="h-full max-w-screen-md mx-auto flex flex-col items-center justify-center px-3">
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
            I&apos;m a daydreaming Technical Research Analyst & Web Developer. I love cats and drinking tea. <br />
            <br />
            Enjoy your visit!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
