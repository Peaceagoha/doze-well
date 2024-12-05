import { useState, useEffect } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import Nav from "../components/DozeWell/Nav";
import SleepTrackingUI from "../components/DozeWell/SleepTrackingUI";
import SoundPlayerUI from "../components/DozeWell/SoundPlayerUI";
import WakeUpUI from "../components/DozeWell/WakeUpUI";
import { useStore } from "@nanostores/react";
import { $bg } from "../store.js";
import Preloader from "../components/Loader.jsx";

const DozeWell = () => {
  const bg = useStore($bg);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen pb-6">
      {/* Background */}
      <div
        className={`${bg} fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat z-[-1]`}
      />

      {/* Static Navbar */}
      <Nav />

      {/* Dynamic Pages */}
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="soundplayer" replace />} />
          <Route path="/soundplayer" element={<SoundPlayerUI />} />
          <Route path="/sleep-tracking" element={<SleepTrackingUI />} />
          <Route path="/wake-up" element={<WakeUpUI />} />
        </Routes>
      )}
    </div>
  );
};

export default DozeWell;
