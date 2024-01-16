import { Suspense, lazy } from "react";
import StartButton from "../components/Home/StartButton";
import { useAppStore } from "../store/appStore";
import Footer from "@common/Footer";
import AudioToggle from "@common/AudioToggle";
import PageLoader from "@common/PageLoader";
const HeroSection = lazy(() => import("@components/Hero/HeroSection"));
const PortfolioSection = lazy(() => import("@components/Portfolio/PortfolioSection"));

const HomePage = () => {
  const { isStartClicked, isHomePageLoading: loading } = useAppStore((state) => ({
    isStartClicked: state.isStartClicked,
    isHomePageLoading: state.isHomePageLoading,
  }));

  return !isStartClicked ? (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <StartButton />
    </div>
  ) : (
    <Suspense fallback={<PageLoader />}>
      {loading && <PageLoader />}
      <div className="w-full relative overflow-auto">
        <HeroSection />
        <PortfolioSection />
        <Footer />
        <AudioToggle />
      </div>
    </Suspense>
  );
};

export default HomePage;
