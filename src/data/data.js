import Avatar1 from "../assets/Ellipse-1.png";
import Avatar2 from "../assets/Ellipse-2.png";
import Avatar3 from "../assets/Ellipse-3.png";
import image1 from "../assets/amico.png";
import image2 from "../assets/bro.png";
// import image3 from "../assets/sleep.png";

import Birds from "../assets/Birds.svg";
import Rain from "../assets/Rain.svg";
import Wind from "../assets/Wind.svg";
import Synthwave from "../assets/Synthwave.svg";
import Ocean from "../assets/Ocean.svg";
import AutumnForest from "../assets/Autumn-forest.svg";
import WaterDripping from "../assets/Water-dripping.svg";
import Orchestral from "../assets/Orchestral.svg";
import WaterFall from "../assets/Water-Fall.svg";
import Thunder from "../assets/Thunder.svg";
import Campfire from "../assets/Camp-fire.svg";
import LakeShore from "../assets/Lake-shore.svg";
import DeepBass from "../assets/Deep-Bass.svg";
import WhiteNoise from "../assets/White-Noise.svg";
import BrainScanner from "../assets/Brain-Scanner.svg";
import Control from "../assets/Control.svg";
import Download from "../assets/Download.svg";
import Play from "../assets/Play.svg";
import Timer from "../assets/Timer.svg";
import bg1 from "../assets/100vh-Bg.png";
import bg2 from "../assets/bg-dashboard_2.png";
import bg3 from "../assets/bg-dashboard_3.png";
import bg4 from "../assets/bg-dashboard_4.png";

export const BACKGROUNDS = [
  { name: "Default", image: bg1, bgClass: "sound-player-bg" },
  { name: "Comfortable", image: bg2, bgClass: "bg-comfortable" },
  { name: "Serene", image: bg3, bgClass: "bg-serene" },
  { name: "Calm", image: bg4, bgClass: "bg-calm" },
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const sliderData = [
  {
    title: "Personalized white Noise",
    body: "Adjusting to personal needs, it can mask disruptive noises and enhance focus or calmness, leading to better rest and overall well-being. helps individuals create an optimal sound environment.",
  },
  {
    title: "Sleep Tracking",
    body: "Adjusting to personal needs, this tool can effectively mask disruptive noises, creating a serene environment that enhances both focus and relaxation.It helps promote a sense of calm, allowing users to achieve deeper, more restful sleep."
  },
  {
    title: "Basic Analytics",
    body: "AdjusBy analysing metrics such as sleep duration, wake-ups, and relaxation time, the app can provide actionable insights to help users identify and address sleep disruptors, leading to improved sleep hygiene and overall well-being..",
  },
  {
    title: "Basic Analytics",
    body: "AdjusBy analysing metrics such as sleep duration, wake-ups, and relaxation time, the app can provide actionable insights to help users identify and address sleep disruptors, leading to improved sleep hygiene and overall well-being..",
  },
  {
    title: "Basic Analytics",
    body: "AdjusBy analysing metrics such as sleep duration, wake-ups, and relaxation time, the app can provide actionable insights to help users identify and address sleep disruptors, leading to improved sleep hygiene and overall well-being..",
  },
  {
    title: "Basic Analytics",
    body: "AdjusBy analysing metrics such as sleep duration, wake-ups, and relaxation time, the app can provide actionable insights to help users identify and address sleep disruptors, leading to improved sleep hygiene and overall well-being..",
  },
];

export const commentsData = [
  {
    title: "Finally Sleeping Through the Night!",
    body: "I used to wake up multiple times during the night and couldn't figure out why. This app helped me identify patterns in my sleep and adjust my bedtime routine. Now, I'm getting uninterrupted sleep, and my energy levels during the day have skyrocketed. I can’t recommend it enough!",
    image: Avatar1,
    name: "Emma Y.",
},
  {
    title: "Peaceful Nights!",
    body: "As a busy professional, stress often keeps me up at night. This app has been a lifesaver! The calming sounds and bedtime stories help me unwind and relax after a hectic day. I can't imagine going to bed without it now. Highly recommend it to anyone looking to improve their sleep.",
    image: Avatar2,
    name: "David L.",
  },
  {
    title: "Perfect for My Kids",
    body: "My kids used to resist bedtime, but with the soothing lullabies and gentle sleep stories in this app, they now look forward to it! We've noticed a big difference in their sleep quality, and they wake up happier. It's become an essential part of our nightly routine.",
    image: Avatar3,
    name: "Shola R.",
  },
  {
    title: "Better Sleep, Better Life!",
    body: "As a working mom, I barely had time to think about my sleep health. This app made it so easy to track my rest and create healthier habits. The insights and tips are spot-on, and I've noticed a huge improvement in my mood and productivity. It's a lifesaver!",
    image: "https://i.pravatar.cc/150?img=7", 
    name: "Emily T.",
},
{
  title: "The Ultimate Sleep Companion!",
  body: "I never realized how much my inconsistent sleep schedule was affecting my health until I started using this app. The gentle reminders and tailored suggestions have made all the difference. I now wake up feeling energized and ready to take on the day. This app is a game-changer!",
  image: "https://i.pravatar.cc/150?img=8", // Replace with the appropriate image variable
  name: "Michael B.",
},

{
  title: "A Life-Changing Experience!",
  body:"I had no idea how much my sleep was affecting my day-to-day life until I started tracking it with this app. The insights and recommendations it provided helped me make small, yet impactful changes to my nightly routine. After following its guidance. It’s been a life-changing experience!",
  image: "https://i.pravatar.cc/150?img=5", // Avatar link
  name: "Olivia M.",
},
  {
    title: "My Productivity Skyrocketed!",
    body: "I never realized how much a consistent sleep routine could truly transform my life until I started using this app. After tracking my patterns and making small adjustments, I've noticed a huge improvement. This app has been an invaluable tool, and I’m incredibly grateful for it!",
    image: "https://i.pravatar.cc/150?img=23",
    name: "Sophia L.",
},
];

export const featuresData = [
  {
    image: image1,
    title: "Healthier Lifestyle",
    body: "Better sleep supports overall well-being. Reduce stress, strengthen your immune system, and maintain a healthy weight with our tailored sleep solutions",
  },
  {
    image: image2,
    title: "Improved Mental Clarity",
    body: "Say goodby to groggy mornings and foggy thinking. Enjoy sharper focus, better decision-making, and enhanced cognitive functions.",
  },
  {
    image: image1,
    title: "Enhanced Energy Levels",
    body: "Wakeup feeling refreshed and energized everyday. DozeWell helps you improve your sleep quality. leading to vibrant morning and productive days.",
  },
];

export const pricePlan = [
  { text: "Basic sleep tracking" },
  { text: "Daily sleep reports" },
  { text: "Limited history (last 7 days of data)" },
  { text: "Community access (forums, blogs)" },
  { text: "Sync across 1 device" },
  { text: "Advanced sleep tracking (sleep stages, interruptions)" },
  { text: "Personalized sleep insights and recommendations" },
  { text: "Full sleep history" },
  { text: "Smart alarm and bedtime reminders" },
  { text: "Integration with fitness apps (Apple Health, Google Fit)" },
  { text: "Sync across 3 devices" },
  { text: "All Plus Plan features" },
  { text: "Detailed analytics (trends, comparisons)" },
  { text: "Priority customer support" },
  { text: "Access to exclusive content (expert guides, webinars)" },
  { text: "Sleep coaching sessions (1 per month)" },
  { text: "Family sharing (up to 5 members)" },
  { text: "Sync across unlimited devices" },
];

export const FAQs = [
  { text: "How does the app work?" },
  { text: "Can i use the app myself without a guide?" },
  { text: "What Happen if i cancel my subscribtion?" },
  { text: "Can I Downgrade My Project?" },
  { text: "Can i make payments on installments?" },
  { text: "How do we make payments?" },
];

export const soundList = [
  {
    id: 1,
    name: "Birds",
    image: Birds,
    category: "birds",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/air conditioner.mp3",
  },
  {
    id: 2,
    name: "Rain",
    image: Rain,
    category: "rain",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/Rain.mp3",
  },
  {
    id: 3,
    name: "Wind",
    image: Wind,
    category: "wain",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/wind.mp3",
  },

  {
    id: 4,
    name: "Synthwave",
    image: Synthwave,
    category: "synthwave",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/fan electric.mp3",
  },
  {
    id: 5,
    name: "Ocean",
    image: Ocean,
    category: "ocean",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/Ocean.mp3",
  },

  {
    id: 6,
    name: "Autumn Forest",
    image: AutumnForest,
    category: "autumn forest",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/autumn forest.mp3",
  },

  {
    id: 7,
    name: "Water Dripping",
    image: WaterDripping,
    category: "water dripping",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/Water Drop 01.mp3",
  },
  {
    id: 8,
    name: "Orchestral",
    image: Orchestral,
    category: "orchestral",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/Orchestral.mp3",
  },
  {
    id: 9,
    name: "Water Fall",
    image: WaterFall,
    category: "waterfall",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/waterfall.mp3",
  },

  {
    id: 10,
    name: "Thunder",
    image: Thunder,
    category: "thunder",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/thunder.mp3",
  },
  {
    id: 11,
    name: "Camp Fire",
    image: Campfire,
    category: "camp fire",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/campfire.mp3",
  },

  {
    id: 12,
    name: "Lake Shore",
    image: LakeShore,
    category: "lake shore",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/lake shore.mp3",
  },
  {
    id: 13,
    name: "Deep Bass",
    image: DeepBass,
    category: "deep bass",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/Deep Bass Wave.mp3",
  },
  {
    id: 14,
    name: "White Noise",
    image: WhiteNoise,
    category: "white noise",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/white noise.mp3",
  },
  {
    id: 15,
    name: "Brain Scanner",
    image: BrainScanner,
    category: "brain scanner",
    soundFile: "https://peaceagoha.github.io/doze-well/assets/Deep Bass Wave.mp3",
  },
];

export const playerTimer = [
  {
    title: "Play",
    image: Play,
  },
  {
    title: "Timer",
    image: Timer,
  },
  {
    title: "Save Mix",
    image: Download,
  },
  {
    title: "Control",
    image: Control,
  },
];
