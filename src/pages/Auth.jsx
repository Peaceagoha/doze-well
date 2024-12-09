import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Preloader from "../components/Loader";
import { useDispatch } from "react-redux";
import { showToast } from "../store/toast";
import sleepImage from "../assets/AuthBed.png";
import googleProviderImg from "../assets/devicon_google@2x.png";
import appleProviderImg from "../assets/mage_apple.png";
import Footer from "../components/LandingPage/Footer";
import Input from "../components/LandingPage/Input";
import MaskImage from "../assets/Mask group.png";
import SecondMaskImage from "../assets/SecondMaskgroup.png";
import lastMaskImag from "../assets/ishaseePhone.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLoginCredentials = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      );

      const user = userCredential.user;

      // Update profile with display name
      await updateProfile(user, {
        displayName: `${userCredentials.firstName} ${userCredentials.lastName}`,
      });

      setUserCredentials({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      dispatch(
        showToast({
          type: "success",
          message: "Signup successful!",
        })
      );

      toggleLoginModal();
    } catch (error) {
      dispatch(
        showToast({
          type: "error",
          message: ("Error signing up:", error),
        })
      );
      // console.error("Error signing up:", error.code, error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginCredentials.email,
        loginCredentials.password
      );

      setLoginCredentials({
        email: "",
        password: "",
      });

      dispatch(
        showToast({
          type: "success",
          message: "Login successful!",
        })
      );

      navigate("/dozewell/soundplayer");
    } catch (error) {
      let errorMessage = "An error occurred during login";

      // Handle specific Firebase authentication errors
      switch (error.code) {
        case "auth/invalid-credential":
          errorMessage = "Invalid email or password";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many login attempts. Please try again later";
          break;
        default:
          errorMessage = error.message || "Login failed. Please try again";
      }

      dispatch(
        showToast({
          type: "error",
          message: errorMessage,
        })
      );
    }
  };

  const handlePasswordReset = async () => {
    try {
      const email = prompt("Please enter your email");

      if (email) {
        await sendPasswordResetEmail(auth, email);
        alert("Email sent! Check your inbox for password reset instructions.");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="flex flex-col justify-start bg-bg-primary min-h-screen">
          <NavLink
            to="/"
            className="text-dozwell-green px-5 py-5 md:px-11 md:py-4 text-3xl font-bold"
          >
            DozeWell
          </NavLink>
          <div className="flex flex-col md:flex-row items-center px-5 py-10 gap-8">
            {/* Left Section */}
            <aside className="w-full md:w-1/2 flex flex-col items-center">
              <div className="px-10">
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
                  Join For Better Sleep
                </h1>
                <p className="text-gray-light-dozewell font-light text-lg md:text-xl py-6 px-10 text-center">
                  Are you ready to enhance your sleep experience? Join{" "}
                  <span className="text-dozwell-green font-bold">DozeWell</span>{" "}
                  today!
                </p>
              </div>

              <form className="w-full max-w-md flex flex-col gap-4">
                <div className="flex gap-4">
                  <Input
                    name="firstName"
                    inputType="text"
                    inputPlaceholder="First Name"
                    value={userCredentials.firstName}
                    onChange={(e) => handleCredentials(e)}
                  />
                  <Input
                    name="lastName"
                    inputType="text"
                    inputPlaceholder="Last Name"
                    value={userCredentials.lastName}
                    onChange={(e) => handleCredentials(e)}
                  />
                </div>
                <Input
                  name="email"
                  inputType="email"
                  inputPlaceholder="Email"
                  value={userCredentials.email}
                  onChange={(e) => handleCredentials(e)}
                />
                <div className="relative">
                  <Input
                    name="password"
                    inputType={isPasswordVisible ? "text" : "password"}
                    inputPlaceholder="Password"
                    value={userCredentials.password}
                    onChange={(e) => handleCredentials(e)}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-white hover:text-black"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-light-dozewell">
                  <input type="checkbox" id="terms" className="w-4 h-4" />
                  <label htmlFor="terms">
                    I agree to DozeWell&apos;s Terms of Service.
                  </label>
                </div>
                <button
                  onClick={handleSignup}
                  className="bg-purple-dozewell text-gray-light-dozewell py-3 rounded-lg text-lg hover:bg-purple-dozewell-light !important"
                >
                  Create an Account
                </button>

                <div className="flex w-full items-center justify-start">
                  <p className="text-gray-light-dozewell text-lg font-light">
                    Already have an account?{" "}
                    <span
                      className="text-dozwell-green underline font-bold cursor-pointer"
                      onClick={toggleLoginModal}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </form>

              <div className="flex items-center justify-center gap-3 text-gray-light-dozewell py-6 w-full max-w-md">
                <hr className="flex-1 border-gray-light-dozewell" />
                Or
                <hr className="flex-1 border-gray-light-dozewell" />
              </div>

              <div className="w-full flex flex-col items-center gap-4">
                <button className="w-full max-w-md flex items-center justify-center gap-3 bg-purple-dozewell text-gray-light-dozewell rounded-lg py-3">
                  <img
                    src={appleProviderImg}
                    alt="Apple logo"
                    className="w-6 h-6"
                  />
                  Continue with Apple
                </button>
                <button className="w-full max-w-md flex items-center justify-center gap-3 bg-purple-dozewell text-gray-light-dozewell rounded-lg py-3">
                  <img
                    src={googleProviderImg}
                    alt="Google logo"
                    className="w-6 h-6"
                  />
                  Continue with Google
                </button>
              </div>
            </aside>

            {/* Right Section */}
            <main className="hidden md:flex md:w-1/2 justify-center">
              <img
                src={sleepImage}
                alt="Sleeping illustration"
                className="w-3/4 h-auto"
              />
            </main>
          </div>

          {/* Feature Sections */}
          {[
            {
              img: MaskImage,
              title: "Fall asleep with ease",
              description:
                "DozeWell provides calming sounds, relaxation guides, and sleep stories to help you drift off easily.",
            },
            {
              img: SecondMaskImage,
              title: "Wake up feeling rested",
              description:
                "Our smart alarm wakes you during your lightest sleep phase for a refreshing start to your day.",
            },
            {
              img: lastMaskImag,
              title: "Understand your sleep",
              description:
                "DozeWell analyzes your sleep patterns and environment, giving insights into your nightly rest.",
            },
          ].map((section, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 px-6 py-10`}
            >
              <img
                src={section.img}
                alt={section.title}
                className="w-full md:w-1/2"
              />
              <div className="flex flex-col items-start md:w-1/2">
                <h2 className="text-white text-3xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-light-dozewell text-xl font-light">
                  {section.description}
                </p>
              </div>
            </section>
          ))}

          {/* Footer */}
          <Footer />
          {/* Login Modal */}
          {isLoginModalOpen && (
            <div className="fixed inset-0 bg-purple-dozewell-light bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-black text-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Login</h2>
                  <button
                    className="text-gray-400 hover:text-gray-200 transition"
                    onClick={toggleLoginModal}
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
                <form>
                  <Input
                    name="email"
                    inputType="email"
                    inputPlaceholder="Email"
                    value={loginCredentials.email}
                    onChange={(e) => handleLoginCredentials(e)}
                  />
                  <div className="relative mt-4">
                    <Input
                      name="password"
                      inputType={isPasswordVisible ? "text" : "password"}
                      inputPlaceholder="Password"
                      value={loginCredentials.password}
                      onChange={(e) => handleLoginCredentials(e)}
                    />
                    <div
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400 hover:text-black"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleLogin}
                    className="w-full bg-purple-dozewell text-gray-light-dozewell text-white py-3 rounded-lg mt-6"
                  >
                    Login
                  </button>

                  <span
                    onClick={handlePasswordReset}
                    className="mt-2 text-right block ml-auto cursor-pointer"
                  >
                    Forgot Password
                  </span>
                </form>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Auth;
