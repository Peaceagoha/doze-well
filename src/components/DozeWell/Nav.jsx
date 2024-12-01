import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Preloader from "../Loader";

const Nav = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const getNavLinkClass = (path) => {
    const baseClass = "px-4 py-2 transition-colors duration-200";
    return `${baseClass} ${
      location.pathname === path
        ? "text-dozwell-green font-semibold"
        : "text-white hover:text-dozwell-green"
    }`;
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <nav
          className={`px-10 bg-blue-900/80 py-4 sticky top-0 z-50 
            ${isScrolled ? "backdrop-blur-md" : ""}`}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <NavLink
              to="/"
              className="text-white text-xl font-bold hover:text-purple-200"
            >
              DozeWell
            </NavLink>
            <div className="hidden md:flex space-x-6 items-center">
              <NavLink
                to="/soundplayer"
                className={getNavLinkClass("/soundplayer")}
              >
                Sound
              </NavLink>
              <NavLink
                to="/sleep-tracking"
                className={getNavLinkClass("/sleep-tracking")}
              >
                Sleep Tracking
              </NavLink>
              <NavLink to="/wake-up" className={getNavLinkClass("/wake-up")}>
                Wake-Up Optimization
              </NavLink>
              <NavLink
                to="/communities"
                className={getNavLinkClass("/communities")}
              >
                Communities
              </NavLink>
              <NavLink
                to="/userAuth"
                className="bg-blue-800 px-7 py-2 rounded-full border border-1 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Profile
              </NavLink>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsNavOpen(true)}>
                <Menu className="text-white w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed h-screen inset-0 bg-bg-primary z-40 transform md:hidden transition-transform duration-300 ease-in-out ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-row px-10 items-center justify-between absolute top-4 left-0 right-0">
              <NavLink
                to="/"
                className="text-white text-xl font-bold hover:text-purple-200"
              >
                DozeWell
              </NavLink>
              <button onClick={() => setIsNavOpen(false)}>
                <X className="text-white w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <NavLink
                to="/soundplayer"
                className={getNavLinkClass("/soundplayer")}
                onClick={() => setIsNavOpen(false)}
              >
                Sound
              </NavLink>
              <NavLink
                to="/sleep-tracking"
                className={getNavLinkClass("/sleep-tracking")}
              >
                Sleep Tracking
              </NavLink>
              <NavLink to="/wake-up" className={getNavLinkClass("/wake-up")}>
                Wake-Up Optimization
              </NavLink>
              {/* <NavLink
                to="/communities"
                className={getNavLinkClass("/communities")}
              >
                Communities
              </NavLink> */}
              <NavLink
                to="/userAuth"
                className="bg-blue-800 px-7 py-2 rounded-full border border-1 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Profile
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
