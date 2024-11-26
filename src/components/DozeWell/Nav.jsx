import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Preloader from "../Loader";

const Nav = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <nav className="px-10 bg-blue-900 py-4 sticky top-0 z-50">
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
                to="/profile"
                className="bg-blue-800 px-7 py-2 rounded-full border border-1 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Profile
              </NavLink>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsNavOpen(true)}>
                <Menu className="text-white w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed inset-0 bg-bg-primary z-40 transform md:hidden transition-transform duration-300 ease-in-out ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute top-4 right-10">
              <NavLink
                to="/"
                className="text-white text-xl font-bold hover:text-purple-200"
              >
                DozeWell
              </NavLink>
              <button onClick={() => setIsNavOpen(false)}>
                <X className="text-white w-6 h-6" />
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
              <NavLink
                to="/communities"
                className={getNavLinkClass("/communities")}
              >
                Communities
              </NavLink>
              <NavLink
                to="/profile"
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

// const Nav = () => {
//   return (
//     <section className="container mx-auto pt-5 px-3 sm:px-10 text-white">
//       <nav className="container mx-auto flex items-center justify-between  py-5 sm:py-3 rounded-3xl">
//         <h1 className="font-bold sm:text-md text-xl">DozeWell</h1>

//         <ul className="text-white hidden sm:block space-x-[4rem] font-semibold">
//           <NavLink to="/soundplayer">Sound</NavLink>
//           <NavLink to="/sleep-tracking">Sleep Tracking</NavLink>
//           <NavLink to="/wake-up">Wake-Up Optimization</NavLink>
//           <NavLink>Communnities</NavLink>

//           <button className="border border-white py-3 px-11 rounded-full">
//             Profile
//           </button>
//         </ul>
//       </nav>
//     </section>
//   );
// };

// import { useState, useEffect } from "react";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import Preloader from "../Loader";

// const Nav = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // Allows programmatic navigation

//   const getNavLinkClass = (path) => {
//     const baseClass = "px-4 py-2 transition-colors duration-200";
//     return `${baseClass} ${
//       location.pathname === path
//         ? "purple-dark-dozewell font-semibold"
//         : "text-white hover:purple-dozewell"
//     }`;
//   };

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Preloader />
//       ) : (
//         <nav className="bg-blue-900 p-4 sticky top-0 z-50">
//           <div className="flex justify-between items-center max-w-7xl mx-auto">
//             {/* Logo */}
//             <NavLink
//               to="/"
//               className="text-white text-xl font-bold hover:text-purple-200"
//             >
//               DozeWell
//             </NavLink>

//             {/* Navigation Links */}
//             <div className="flex space-x-6 items-center">
//               <NavLink
//                 to="/doze-well/soundplayer"
//                 className={getNavLinkClass("/soundplayer")}
//               >
//                 Sound
//               </NavLink>
//               <NavLink
//                 to="/doze-well/sleep-tracking"
//                 className={getNavLinkClass("/sleep-tracking")}
//               >
//                 Sleep Tracking
//               </NavLink>
//               <NavLink to="/wake-up" className={getNavLinkClass("/wake-up")}>
//                 Wake-Up Optimization
//               </NavLink>
//               <NavLink
//                 to="/communities"
//                 className={getNavLinkClass("/communities")}
//               >
//                 Communities
//               </NavLink>
//               <NavLink
//                 to="/profile"
//                 className="bg-blue-800 px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Profile
//               </NavLink>
//             </div>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Nav;

// import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react"; // You can use these icons from lucide-react
// import Preloader from "../Loader";

// const Nav = () => {
//   const location = useLocation();

//   const getNavLinkClass = (path) => {
//     const baseClass = "px-4 py-2 transition-colors duration-200";
//     return `${baseClass} ${
//       location.pathname === path
//         ? "text-dozwell-green font-semibold"
//         : "text-white hover:text-dozwell-green"
//     }`;
//   };

//   const [isLoading, setIsLoading] = useState(true);
//   const [isNavOpen, setIsNavOpen] = useState(false); // For toggling mobile menu

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Preloader />
//       ) : (
//         <nav className="flex flex-row justify-space px-10 bg-blue-900 py-4 sticky top-0 z-50">
//           <div className="flex justify-between items-center max-w-7xl mx-auto">
//             <NavLink
//               to="/"
//               className="text-white text-xl font-bold hover:text-purple-200"
//             >
//               DozeWell
//             </NavLink>

//           </div>

//           {/* Sliding Mobile Menu */}
//           <div
//             className={`fixed inset-0 bg-blue-900 z-40 transform md:hidden transition-transform duration-300 ease-in-out ${
//               isNavOpen ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             <div className="flex flex-col items-center justify-center h-full space-y-8">
//               <NavLink
//                 to="/soundplayer"
//                 className={getNavLinkClass("/soundplayer")}
//               >
//                 Sound
//               </NavLink>
//               <NavLink
//                 to="/sleep-tracking"
//                 className={getNavLinkClass("/sleep-tracking")}
//               >
//                 Sleep Tracking
//               </NavLink>
//               <NavLink to="/wake-up" className={getNavLinkClass("/wake-up")}>
//                 Wake-Up Optimization
//               </NavLink>
//               <NavLink
//                 to="/communities"
//                 className={getNavLinkClass("/communities")}
//               >
//                 Communities
//               </NavLink>
//               <NavLink
//                 to="/profile"
//                 className="bg-blue-800 px-7 py-2 rounded-full border border-1 text-white hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Profile
//               </NavLink>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//             <NavLink
//               to="/soundplayer"
//               className={getNavLinkClass("/soundplayer")}
//             >
//               Sound
//             </NavLink>
//             <NavLink
//               to="/sleep-tracking"
//               className={getNavLinkClass("/sleep-tracking")}
//             >
//               Sleep Tracking
//             </NavLink>
//             <NavLink to="/wake-up" className={getNavLinkClass("/wake-up")}>
//               Wake-Up Optimization
//             </NavLink>
//             <NavLink
//               to="/communities"
//               className={getNavLinkClass("/communities")}
//             >
//               Communities
//             </NavLink>
//             <NavLink
//               to="/profile"
//               className="bg-blue-800 px-7 py-2 rounded-full border border-1 text-white hover:bg-blue-700 transition-colors duration-200"
//             >
//               Profile
//             </NavLink>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Nav;
