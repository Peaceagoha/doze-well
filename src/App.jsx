import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Loader";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DozeWell from "./pages/DozeWell";

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

          <Route path="/dozewell/*" element={<DozeWell />} />
        </Routes>
      )}
    </>
  );
};

export default App;
