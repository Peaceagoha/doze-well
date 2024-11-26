import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Loader";
import Home from "./pages/Home";
import SoundPlayer from "./pages/SoundPlayer";
import Auth from "./pages/Auth";
import WakeUp from "./pages/WakeUp";
import SleepTracking from "./pages/SleepTracking";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userAuth" element={<Auth />} />
          <Route path="/soundplayer" element={<SoundPlayer />} />
          <Route path="/sleep-tracking" element={<SleepTracking />} />

          <Route path="/wake-up" element={<WakeUp />} />
        </Routes>
      )}
    </>
  );
};

export default App;
