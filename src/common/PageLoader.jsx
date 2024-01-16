import { useEffect } from "react";

const PageLoader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center bg-light">
      <h1 className="animate-pulse text-3xl font-medium text-dark">Loading...</h1>
    </div>
  );
};

export default PageLoader;
