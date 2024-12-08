import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/user";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/toast";
import { clearUser } from "../../store/user";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const currentUser = useSelector(selectUsers).currentUser;

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      signOut(auth)
        .then(() => {
          dispatch(clearUser());
          dispatch(
            showToast({
              type: "success",
              message: "Logout successful!",
            })
          );
          navigate("/login");
        })
        .catch((error) => {
          showToast({
            type: "error",
            message: ("Error during logout: ", error),
          });
          console.error("Error during logout: ", error);
        });
    }
  };

  return (
    <>
      <nav
        className={`bg-blue-900/80 py-4 sticky top-0 z-50 ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="container flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-white text-xl font-bold hover:text-purple-200"
            onClick={handleNavLinkClick}
          >
            DozeWell
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/dozewell/soundplayer"
              className={getNavLinkClass("/dozewell/soundplayer")}
              onClick={handleNavLinkClick}
            >
              Sound
            </NavLink>
            <NavLink
              to="/dozewell/sleeptracking"
              className={getNavLinkClass("/dozewell/sleeptracking")}
              onClick={handleNavLinkClick}
            >
              Sleep Tracking
            </NavLink>
            <NavLink
              to="/dozewell/wakeup"
              className={getNavLinkClass("/dozewell/wakeup")}
              onClick={handleNavLinkClick}
            >
              Wake-Up Optimization
            </NavLink>
          </div>
          <div className="flex flex-row space-x-2">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsNavOpen(true)}>
                <Menu className="text-white w-8 h-8" />
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                {isSmallScreen ? (
                  <FaUserCircle size={28} className="text-white" />
                ) : (
                  <div className="bg-blue-800 px-7 py-2 rounded-full border border-1 text-white hover:bg-blue-700 transition-colors duration-200">
                    Profile
                  </div>
                )}
              </button>

              {isDropdownOpen && (
                <div className="bg-blue-card-bg text-white absolute right-0 mt-2 p-2 rounded-md shadow-lg w-40">
                  <div className="capitalize block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 transition-colors">
                    {currentUser.displayName ||
                      (currentUser.email && currentUser.email.split("@")[0])}
                  </div>
                  <button
                    className="hover:bg-purple-dozewell-accent rounded-md block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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
              onClick={handleNavLinkClick}
            >
              DozeWell
            </NavLink>
            <button onClick={() => setIsNavOpen(false)}>
              <X className="text-white w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <NavLink
              to="/dozewell/soundplayer"
              className={getNavLinkClass("/dozewell/soundplayer")}
              onClick={handleNavLinkClick}
            >
              Sound
            </NavLink>
            <NavLink
              to="/dozewell/sleeptracking"
              className={getNavLinkClass("/dozewell/sleeptracking")}
              onClick={handleNavLinkClick}
            >
              Sleep Tracking
            </NavLink>
            <NavLink
              to="/dozewell/wakeup"
              className={getNavLinkClass("/dozewell/wakeup")}
              onClick={handleNavLinkClick}
            >
              Wake-Up Optimization
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
