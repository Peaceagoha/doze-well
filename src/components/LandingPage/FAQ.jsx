import { FAQs } from "../../data/data";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section className="container mx-auto px-6 py-10 sm:px-20 sm:py-24 text-white">
      <main className="bg-purple-dark-dozewell px-4 py-5 md:py-20 md:px-20">
        <h3 className="pb-6 text-3xl sm:text-1xl">
          Frequently asked questions
        </h3>
        {FAQs.map((FAQ, i) => (
          <Accordion key={i} text={[FAQ.text]} />
        ))}
      </main>
    </section>
  );
};

export default Faq;
