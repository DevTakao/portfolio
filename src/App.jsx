import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useAppStore } from "./store/appStore";
import { useEffect } from "react";

function App() {
  const { isMobileNavOpen } = useAppStore();

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
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
