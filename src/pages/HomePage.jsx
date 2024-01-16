import { Suspense, lazy } from "react";
import StartButton from "../components/Home/StartButton";
import { useAppStore } from "../store/appStore";
import Footer from "@common/Footer";
import AudioToggle from "@common/AudioToggle";
import PageLoader from "@common/PageLoader";
const HeroSection = lazy(() => import("@components/Hero/HeroSection"));
const PortfolioSection = lazy(() => import("@components/Portfolio/PortfolioSection"));

const HomePage = () => {
  const { isStartClicked } = useAppStore((state) => ({
    isStartClicked: state.isStartClicked,
  }));

  return !isStartClicked ? (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <StartButton />
    </div>
  ) : (
    <Suspense fallback={<PageLoader />}>
      <div className="w-full h-screen relative overflow-auto snap-y snap-proximity">
        <HeroSection />
        <PortfolioSection />
        <Footer />
        <AudioToggle />
      </div>
    </Suspense>
  );
};

export default HomePage;
