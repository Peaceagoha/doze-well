// import { NavLink, useNavigate, Link } from "react-router-dom";
// import MenuIcon from "../assets/menu_icon.png";
// import CloseIcon from "../assets/cross_icon.png";
// import { useState } from "react";

// const Header = () => {
//   const [visible, setVisible] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <section className="container w-full m-auto">
//       <nav className="container mx-auto flex items-center justify-between bg-bg-primary px-5  py-5 sm:py-3 rounded-3xl">
//         <h1 className="text-purple-dozewell font-bold sm:text-md text-xl">
//           DozeWell
//         </h1>
//         <ul className="text-white hidden sm:block space-x-4">
//           <NavLink>Home</NavLink>
//           <NavLink>Features</NavLink>
//           <NavLink>How It Works</NavLink>
//           <NavLink>Testimonials</NavLink>
//         </ul>

//         <div className="hidden sm:flex items-center gap-3">
//           {" "}
//           {/* <NavLink className="text-white">Login</NavLink> */}
//           <Link to="/userAuth" className="text-white">
//             Login
//           </Link>
//           <button
//             className="text-purple-dozewell border border-purple-dozewell px-8 rounded-3xl py-2"
//             onClick={() => navigate("/soundplayer")}
//           >
//             Try for free
//           </button>
//         </div>

//         <button className="sm:hidden" onClick={() => setVisible(true)}>
//           <img src={MenuIcon} className="w-10" alt="" />
//         </button>
//       </nav>

//       <div
//         className={`z-99 absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all duration-200 ease-linear ${
//           visible ? "w-full" : "w-0"
//         }`}
//       >
//         <div className="flex flex-col text-gray-600 bg-bg-primary text-white h-screen text-base font-medium">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor-pointer"
//           >
//             <img src={CloseIcon} className="w-5" alt="" />
//           </div>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-b-purple-dozewell"
//             to="/"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-b-purple-dozewell"
//             to="/"
//           >
//             Features
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-b-purple-dozewell"
//             to="/"
//           >
//             How It Works
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-b-purple-dozewell"
//             to="/"
//           >
//             Testimonials
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border-b border-b-purple-dozewell"
//             to="/"
//           >
//             Login
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;

// import { NavLink, useNavigate, Link } from "react-router-dom";
// import MenuIcon from "../assets/menu_icon.png";
// import CloseIcon from "../assets/cross_icon.png";
// import { useState } from "react";

// const Header = () => {
//   const [visible, setVisible] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <>
//       <nav className="container mx-auto flex items-center justify-between bg-bg-primary px-5 py-5 sm:py-3 rounded-3xl">
//         <h1
//           className="text-purple-dozewell font-bold sm:text-md text-xl"
//           // style={{ color: "#2BD9A8" }}
//         >
//           DozeWell
//         </h1>
//         <ul className="text-white hidden sm:flex space-x-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `hover:text-blue-500 font-semibold ${
//                 isActive ? "text-blue-500" : ""
//               }`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/features"
//             className={({ isActive }) =>
//               `hover:text-blue-500 font-semibold ${
//                 isActive ? "text-blue-500" : ""
//               }`
//             }
//           >
//             Features
//           </NavLink>
//           <NavLink
//             to="/how-it-works"
//             className={({ isActive }) =>
//               `hover:text-blue-500 font-semibold ${
//                 isActive ? "text-blue-500" : ""
//               }`
//             }
//           >
//             How It Works
//           </NavLink>
//           <NavLink
//             to="/testimonials"
//             className={({ isActive }) =>
//               `hover:text-blue-500 font-semibold ${
//                 isActive ? "text-blue-500" : ""
//               }`
//             }
//           >
//             Testimonials
//           </NavLink>
//         </ul>

//         <div className="hidden sm:flex items-center gap-3">
//           <NavLink
//             to="/login"
//             className="text-white hover:text-blue-500 font-semibold"
//           >
//             Login
//           </NavLink>
//           <Link
//             to="/userAuth"
//             className="text-white hover:text-blue-500 font-semibold"
//           >
//             Sign Up
//           </Link>
//           <button
//             className="text-purple-dozewell border border-purple-dozewell px-8 rounded-3xl py-2"
//             onClick={() => navigate("/soundplayer")}
//           >
//             Try for free
//           </button>
//         </div>

//         <button className="sm:hidden" onClick={() => setVisible(true)}>
//           <img src={MenuIcon} className="w-10" alt="" />
//         </button>
//       </nav>

//       <div
//         className={`z-100 absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all duration-200 ease-linear ${
//           visible ? "w-full" : "w-0"
//         }`}
//       >
//         <div className="flex flex-col text-gray-600 bg-bg-primary text-white h-screen text-base font-medium">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor-pointer"
//           >
//             <img src={CloseIcon} className="w-5" alt="" />
//           </div>
//           {[
//             { label: "Home", to: "/" },
//             { label: "Features", to: "/features" },
//             { label: "How It Works", to: "/how-it-works" },
//             { label: "Testimonials", to: "/testimonials" },
//             { label: "Login", to: "/login" },
//           ].map(({ label, to }) => (
//             <NavLink
//               key={label}
//               onClick={() => setVisible(false)}
//               to={to}
//               className="py-2 pl-6 border-b border-b-purple-dozewell hover:text-blue-500 font-semibold"
//             >
//               {label}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import { NavLink, useNavigate, Link } from "react-router-dom";
import MenuIcon from "../assets/menu_icon.png";
import CloseIcon from "../assets/cross_icon.png";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setVisible((prev) => !prev);
    document.body.style.overflow = visible ? "auto" : "hidden"; // Prevent scrolling when menu is open
  };

  return (
    <section className="container w-full mx-auto">
      {/* Desktop and Mobile Header */}
      <nav className="container mx-auto flex items-center justify-between bg-bg-primary px-5 py-5 sm:py-3 rounded-3xl">
        <h1 className="text-purple-dozewell font-bold sm:text-md text-xl">
          DozeWell
        </h1>
        {/* Desktop Links */}
        <ul className="hidden sm:flex text-white space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link to="/userAuth" className="text-white">
            Login
          </Link>
          <button
            className="text-purple-dozewell border border-purple-dozewell px-8 rounded-3xl py-2"
            onClick={() => navigate("/soundplayer")}
          >
            Try for free
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="sm:hidden" onClick={handleToggleMenu}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
