import { useNavigate } from "react-router-dom";
import {
  FaHandHolding,
  FaHandHoldingUsd,
  FaHandHoldingHeart,
} from "react-icons/fa";
import desktopPlayer from "../../assets/desktop-player.png";
import mobilePlayer from "../../assets/mobile-player.png";
import Box from "../../assets/box.png";
import Check from "../../assets/check.png";
import { pricePlan } from "../../data/data";
import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../../store/user";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Subscription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const [isTablet, setIsTablet] = useState(false);

  // Check if the screen is a tablet
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width <= 1024);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Add event listener for resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped Left"),
    onSwipedRight: () => console.log("Swiped Right"),
    trackMouse: true, // Allow mouse swipe for testing on desktops
  });

  const handleNavigate = () => {
    if (currentUser) {
      navigate("/dozewell/soundplayer"); // Navigate to sound player if logged in
    } else {
      navigate("/login"); // Navigate to login if logged out
    }
  };

  return (
    <section className="text-white flex-row items-center justify-center px-6 py-10 sm:px-20 sm:py-24">
      <div className="m-auto">
        <img
          src={desktopPlayer}
          className="md:block hidden"
          alt=""
          onClick={handleNavigate}
        />
        <img
          src={mobilePlayer}
          className="md:hidden"
          alt=""
          onClick={handleNavigate}
        />
      </div>

      <main className="py-6 sm:py-2 mt-24">
        <div className="space-y-4">
          <h1 className="font-bold text-lg md:text-2xl">Subscription</h1>
          <p className="sub__font text-base font-light">
            Never miss a good night&apos;s sleep
          </p>
        </div>

        {/* Wrapper for Swipeable Cards */}
        <div
          {...(isTablet ? swipeHandlers : {})} // Apply swipe handlers only for tablets
          className={`py-8 flex md:flex-row flex-col items-center ${
            isTablet ? "overflow-x-auto scrollbar-hide" : ""
          } gap-2 md:gap-1/2 sub`}
        >
          {/* Price Plan Card 1 */}
          <div className="sub__card sub__bg leading-7 flex flex-col gap-2 relative">
            <div className="flex items-center gap-2 relative">
              <img src={Box} alt="" className="relative" />
              <div className="icon">
                <FaHandHolding className="absolute top-1/2 left-1/2 transform -translate-x-[5px] -translate-y-[23px] text-white text-4xl" />
              </div>
              <div>
                <h2>Free Plan (Basic)</h2>
                <p>Price: $0/month</p>
              </div>
            </div>
            <div className="space-y-4">
              {pricePlan.slice(0, 5).map((plan, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-white mx-3"
                >
                  <img src={Check} alt="" />
                  <p className="sub__text font-small text-base">{plan.text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleNavigate}
              className="sub__button bg-purple-dark-dozewell py-4 rounded-lg my-[120px]"
            >
              Sign Up for Free
            </button>
          </div>

          {/* Price Plan Card 2 */}
          <div className="sub__card__middle sub__bg flex flex-col gap-2 relative">
            <div className="flex items-center gap-4 relative">
              <img src={Box} alt="" className="relative" />
              <FaHandHoldingUsd className="absolute top-1/2 left-6 transform -translate-x-[5px] -translate-y-[20px] text-white text-4xl" />
              <div>
                <h2>Plus Plan (Intermediate)</h2>
                <p>Price: $9.99/month</p>
              </div>
            </div>
            <div className="space-y-4">
              {pricePlan.slice(5, 11).map((plan, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-white mx-3"
                >
                  <img src={Check} alt="" />
                  <p className="font-small text-l leading-7">{plan.text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleNavigate}
              className="sub__button bg-purple-dark-dozewell ml-2 my-8 py-4"
            >
              Start Free Trial
            </button>
          </div>

          {/* Price Plan Card 3 */}
          <div className="sub__card__right sub__bg flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={Box} alt="" />
              <div className="icon">
                <FaHandHoldingHeart className="absolute top-1/2 left-[1px] transform -translate-x-[5px] -translate-y-[18px] text-white text-4xl" />
              </div>
              <div>
                <h2>Premium Plan</h2>
                <p>Price: $19.99/month</p>
              </div>
            </div>
            <div className="space-y-4 relative">
              {pricePlan.slice(11, 18).map((plan, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-white relative"
                >
                  <img src={Check} alt="" className="relative" />
                  <p className="sub__font mx-3">{plan.text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleNavigate}
              className="sub__button bg-purple-dark-dozewell py-4 my-5 rounded-lg"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Subscription;
