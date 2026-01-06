const FAQ = () => {
  return (
    <section id="FAQSection" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers we hear commonly from our clients.
          </p>
        </div>
        <div className="space-y-6">
          <div id="faq-1" className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Who do you typically work with?
            </h3>
            <p id="answer-1" className="text-gray-600">
              We work with expatriates at different stages of their
              international journey—from professionals working abroad to
              long-term expats planning for the future. Our clients often have
              financial considerations spanning multiple countries and value
              structured, long-term guidance.
            </p>
          </div>
          <div id="faq-2" className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Do I need a certain level of income or assets to work with you?
            </h3>
            <p id="answer-2" className="text-gray-600">
              Our services are best suited for individuals who are serious about
              long-term financial planning and value professional guidance.
              During an initial consultation, we’ll assess whether our services
              are the right fit for your situation.
            </p>
          </div>
          <div id="faq-3" className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Is your advice independent?
            </h3>
            <p id="answer-3" className="text-gray-600">
              Our advice is provided with a client-first approach and is guided
              by transparency and professional standards. We focus on solutions
              that align with your goals and circumstances.
            </p>
          </div>
          <div id="faq-4" className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Will my financial plan adapt if my situation changes?
            </h3>
            <p id="answer-4" className="text-gray-600">
              Yes. Life abroad often comes with change—new roles, relocations,
              or family considerations. We provide ongoing guidance to ensure
              your financial strategy evolves alongside your circumstances.
            </p>
          </div>
          <div id="faq-5" className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Is my information kept confidential?
            </h3>
            <p id="answer-5" className="text-gray-600">
              Absolutely. All client discussions and information are handled
              with strict confidentiality and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
