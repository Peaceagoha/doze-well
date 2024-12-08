import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Nav from "../components/DozeWell/Nav";
import { useStore } from "@nanostores/react";
import { $bg } from "../store/store.js";
import Preloader from "../components/Loader.jsx";

const DozeWell = () => {
  const bg = useStore($bg);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? <Preloader /> : <Outlet />}
    </div>
  );
};

export default DozeWell;
