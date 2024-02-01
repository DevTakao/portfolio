import { useEffect } from "react";
import Loader from "./Loader";

const PageLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center bg-light">
      <div className="inline-flex flex-col items-center">
        <Loader />
        <p className="py-2 px-4">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
