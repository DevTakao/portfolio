import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useAppStore } from "./store/appStore";
import { useEffect } from "react";

function App() {
  const { isMobileNavOpen } = useAppStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const handleScreenSizeChange = () => {
      if (mediaQuery.matches && isMobileNavOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };

    handleScreenSizeChange();

    mediaQuery.addEventListener("change", handleScreenSizeChange);

    return () => {
      document.body.style.overflowY = "auto";
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, [isMobileNavOpen]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
