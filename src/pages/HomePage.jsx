import { Suspense, lazy } from "react";
import StartButton from "../components/Home/StartButton";
import { useAppStore } from "../store/appStore";
import Footer from "@common/Footer";
import AudioToggle from "@common/AudioToggle";
import PageLoader from "@common/PageLoader";
const ProjectsSection = lazy(() => import("@components/Projects/ProjectsSection"));
const HeroSection = lazy(() => import("@components/Hero/HeroSection"));
const StatsSection = lazy(() => import("@components/Stats/StatsSection"));
const SkillsSection = lazy(() => import("@components/Skills/SkillsSection"));
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
      <div className="w-full overflow-hidden">
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <ProjectsSection />
        <PortfolioSection />
        <Footer />
        <AudioToggle />
      </div>
    </Suspense>
  );
};

export default HomePage;
