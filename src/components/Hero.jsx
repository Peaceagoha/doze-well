// import ImageSlider from "./ImageSlider";
// import Header from "./Header";

// const Hero = () => {
//   return (
//     <section
//       className="h-screen px-6 py-[6rem] mx-auto bg-hero"
//       // style={{ height: "calc(100vh - 100px)" }}
//     >
//       <div
//         className="fixed top-5 left-0 right-0 sm:mx-10 z-50"
//         // style={{ margin: "0 80px" }}
//       >
//         <Header />
//       </div>

//       <div className="flex gap-4  sm:px-20  flex-col items-center sm:flex-row sm:gap-6 ">
//         <div className="space-y-4 flex-1">
//           <h1 className="text-5xl font-bold text-white">
//             Unlock the Power of Restful Sleep
//           </h1>
//           <p className=" text-white">
//             Track, Improve, and Master Your Sleep Patterns
//           </p>
//         </div>
//         <div className="flex-1">
//           <ImageSlider />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import Header from "./Header";
// import ImageSlider from "./ImageSlider";

// const Hero = () => {
//   return (
//     <section className="relative h-screen bg-hero">
//       {/* Floating Header */}
//       <div
//         className="absolute top-5 left-0 right-0"
//         style={{ margin: "0 80px" }}
//       >
//         <Header />
//       </div>

//       {/* Hero Content */}
//       <div className="flex flex-col items-center justify-center h-full px-6 sm:px-20">
//         <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 w-full">
//           <div
//             className="space-y-4 flex-1 text-center sm:text-left"
//             style={{ alignSelf: "center" }}
//           >
//             <h1 className="text-5xl font-bold text-white">
//               Unlock the Power of Restful Sleep
//             </h1>
//             <p className="text-white">
//               Track, Improve, and Master Your Sleep Patterns
//             </p>
//           </div>
//           <div className="flex-1 flex justify-center sm:justify-end">
//             <ImageSlider />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import Header from "./Header";
// import ImageSlider from "./ImageSlider";

// const Hero = () => {
//   return (
//     <section
//       className="relative h-screen bg-hero"
//       style={{ overflow: "hidden" }}
//     >
//       {/* Fixed Header */}
//       <div
//         className="fixed top-0 left-0 right-0 sm:m-10 z-50"
//         // style={{ margin: "0 80px" }}
//       >
//         <Header />
//       </div>

//       {/* Hero Content */}
//       <div className="flex flex-col items-center justify-center h-full px-6 sm:px-20">
//         <div className="flex flex-col sm:flex-row items-center sm:items-start mt-6 gap-6 w-full">
//           <div
//             className="space-y-4 flex-1 text-center sm:text-left"
//             style={{ marginTop: "150px" }}
//           >
//             <h1 className="text-5xl font-bold text-white">
//               Unlock the Power of Restful Sleep
//             </h1>
//             <p className="text-white">
//               Track, Improve, and Master Your Sleep Patterns
//             </p>
//           </div>
//           <div className="flex-1 flex justify-center sm:justify-end">
//             <ImageSlider />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Header from "./Header";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <section className="relative h-screen bg-hero">
      {/* Floating Header */}
      <div
        className="absolute top-6 left-0 right-0 mx-auto px-10"
        //style={{ margin: "0 80px" }}
      >
        <Header />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full px-6 sm:px-20 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl sm:text-4xl font-bold text-white">
              Unlock the Power of Restful Sleep
            </h1>
            <p className="text-white text-sm sm:text-base opacity-75">
              Track, Improve, and Master Your Sleep Patterns
            </p>
          </div>
          <div className="hero__image flex-1 mt-16">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
