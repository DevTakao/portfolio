import StartButton from "../components/HomePage/StartButton";
import { useAppStore } from "../store/appStore";
import Step1 from "./Step1";

const HomePage = () => {
  const { isStartClicked } = useAppStore((state) => ({
    isStartClicked: state.isStartClicked,
  }));

  return !isStartClicked ? (
    <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <StartButton />
    </div>
  ) : (
    <Step1></Step1>
  );
};

export default HomePage;
