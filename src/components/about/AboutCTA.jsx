const AboutCTA = () => {
  return (
    <section
      id="AboutCTASection"
      className="py-20 bg-linear-to-t from-blue to-blue-800"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8">
          <i class="fa-regular fa-comments text-6xl text-white mb-6"></i>
        </div>
        <h2 className="text-4xl font-bold mb-6 font-oswald text-white">
          Ready to Take Control of Your Financial Future?
        </h2>
        <p className="text-xl text-blue-100 font-extralight mb-10 leading-relaxed max-w-3xl mx-auto">
          Let's have a conversation about your goals. An honest advice from
          someone who's been in your shoes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-white text-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center"
          >
            <i class="fa-solid fa-calendar-check mr-2"></i>Schedule a
            Consultation
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue transition-colors inline-flex items-center justify-center"
          >
            <i class="fa-solid fa-envelope mr-2"></i>Send me a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
