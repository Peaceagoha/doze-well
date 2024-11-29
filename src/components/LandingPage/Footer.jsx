import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-purple-dark-dozewell mx-auto w-full px-6 py-10 sm:px-20 sm:py-24 text-white space-y-4">
      <section className="container space-y-8 mx-auto">
        <main className="flex md:flex-row flex-col gap-8 md:gap-0 items-start justify-between">
          <div>
            <h1 className="text-purple-dozewell font-bold sm:text-md text-xl">
              DozeWell
            </h1>
          </div>

          <ul className="space-y-4">
            <li>Resources</li>
            <li>Sleep Guide</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>

          <ul className="space-y-4">
            <li>About Us</li>
            <li>Overview</li>
          </ul>

          <ul className="space-y-4">
            <li>Help & Support</li>
            <li>Communities</li>
            <li>Testimonials</li>
          </ul>

          <ul className="space-y-4">
            <li>Legal</li>
            <li>Privacy Policies</li>
            <li>Terms of services</li>
            <li>Cookies Policies</li>
          </ul>
        </main>

        <hr className="border-gray-dark-dozewell" />

        <div className="flex items-center gap-4">
          <img src={facebook} alt="facebook" className="w-10" />
          <img src={twitter} alt="twitter" className="w-10" />
          <img src={instagram} alt="instagram" className="w-10" />
          <img src={linkedin} alt="linkedin" className="w-10" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
