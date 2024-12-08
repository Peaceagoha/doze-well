import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Preloader from "./components/Loader";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DozeWell from "./pages/DozeWell";
import { selectUsers } from "./store/user";
import { useSelector } from "react-redux";
import SleepTrackingUI from "./components/DozeWell/SleepTrackingUI";
import SoundPlayerUI from "./components/DozeWell/SoundPlayerUI";
import WakeUpUI from "./components/DozeWell/WakeUpUI";
import AuthListener from "./components/AuthListener";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(selectUsers);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AuthListener />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />

          {user.currentUser ? (
            <Route path="/dozewell" element={<DozeWell />}>
              <Route index element={<SleepTrackingUI />} />
              <Route path="soundplayer" element={<SoundPlayerUI />} />
              <Route path="sleeptracking" element={<SleepTrackingUI />} />
              <Route path="wakeup" element={<WakeUpUI />} />
            </Route>
          ) : (
            <Route
              path="/dozewell/*"
              element={<Navigate to="/login" replace />}
            />
          )}
        </Routes>
      )}
    </>
  );
};

export default App;
