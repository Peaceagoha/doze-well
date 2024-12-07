import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-purple-dark-dozewell mx-auto w-full px-6 py-10 sm:px-20 sm:py-24 text-white space-y-6">
      <section className="container mx-auto">
        {/* DozeWell */}
        <div className="text-center mb-8">
          <h1 className="text-purple-dozewell font-bold text-xl sm:text-2xl">
            DozeWell
          </h1>
        </div>

        {/* Links Section */}
        <main className="flex flex-col md:flex-row md:justify-between gap-8 items-start">
          {/* Links */}
          <div className="flex flex-col sm:flex-row  gap-8 sm:gap-16">
            <ul className="space-y-4 sm:text-sm sm:font-normal">
              <li className="font-bold sm:font-medium">Resources</li>
              <li>Sleep Guide</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>

            <ul className="space-y-4 sm:text-sm sm:font-normal">
              <li className="font-bold sm:font-medium">About Us</li>
              <li>Overview</li>
            </ul>

            <ul className="space-y-4 sm:text-sm sm:font-normal">
              <li className="font-bold sm:font-medium">Help & Support</li>
              <li>Communities</li>
              <li>Testimonials</li>
            </ul>

            <ul className="space-y-4 sm:text-sm sm:font-normal">
              <li className="font-bold sm:font-medium">Legal</li>
              <li>Privacy Policies</li>
              <li>Terms of Services</li>
              <li>Cookies Policies</li>
            </ul>
          </div>
        </main>

        {/* Social Links Section */}
        <div className="flex justify-start gap-6 mt-10 sm:mt-12">
          <img src={facebook} alt="Facebook" className="w-10 h-10" />
          <img src={twitter} alt="Twitter" className="w-10 h-10" />
          <img src={instagram} alt="Instagram" className="w-10 h-10" />
          <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
        </div>

        {/* Divider */}
        <hr className="border-gray-dark-dozewell mt-6" />
      </section>
    </footer>
  );
};

export default Footer;
