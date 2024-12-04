import { NavLink, useNavigate, Link } from "react-router-dom";
import MenuIcon from "../../assets/menu_icon.png";
import CloseIcon from "../../assets/cross_icon.png";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setVisible((prev) => !prev);
    document.body.style.overflow = visible ? "auto" : "hidden";
  };

  return (
    <section className="w-full lg:px-10">
      {/* Desktop and Mobile Header */}
      <nav className="container mx-auto flex items-center -my-2 justify-between bg-bg-primary px-5 py-5 sm:py-3 rounded-3xl">
        <h1 className="text-purple-dozewell font-bold sm:text-md text-xl">
          DozeWell
        </h1>
        {/* Desktop Links */}
        <ul className="hidden lg:flex text-white space-x-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/userAuth" className="text-white">
            Login
          </Link>
          <button
            className="text-purple-dozewell border border-purple-dozewell px-8 rounded-3xl py-2"
            onClick={() => navigate("/dozewell/soundplayer")}
          >
            Try for free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={handleToggleMenu}>
          <img src={MenuIcon} className="w-8" alt="Menu Icon" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-full bg-bg-primary text-white transform transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div
            className="flex items-center justify-between p-5 border-b border-purple-dozewell"
            onClick={handleToggleMenu}
          >
            <h1 className="text-xl text-purple-dozewell font-bold">DozeWell</h1>
            <img src={CloseIcon} className="w-6" alt="Close Icon" />
          </div>
          {/* Mobile Links */}
          <div className="flex flex-col text-lg space-y-4 px-5 mt-5">
            <NavLink
              to="/"
              onClick={handleToggleMenu}
              className="py-2 border-b border-b-purple-dozewell"
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              onClick={handleToggleMenu}
              className="py-2 border-b border-b-purple-dozewell"
            >
              Features
            </NavLink>
            <NavLink
              to="/how-it-works"
              onClick={handleToggleMenu}
              className="py-2 border-b border-b-purple-dozewell"
            >
              How It Works
            </NavLink>
            <NavLink
              to="/testimonials"
              onClick={handleToggleMenu}
              className="py-2 border-b border-b-purple-dozewell"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/userAuth"
              onClick={handleToggleMenu}
              className="py-2 border-b border-b-purple-dozewell"
            >
              Login
            </NavLink>
            <NavLink
              to="/dozewell/soundplayer"
              onClick={handleToggleMenu}
              className="text-purple-dozewell border border-purple-dozewell text-center rounded-3xl py-2"
              style={{ width: "140px" }}
            >
              Try for free
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;