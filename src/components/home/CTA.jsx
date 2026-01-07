import CTAPicture from "../../assets/CTAPicture.png";

const CTA = () => {
  return (
    <section
      id="CTASection"
      className="text-white max-w-7xl mx-auto rounded-lg shadow-2xl mb-20  bg-linear-to-tr from-black via-blue to-black"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          <div className="text-center lg:text-left h-full max-h-87.5">
            <div className="mb-8 flex flex-col justify-between h-full space-y-10">
              <div className="space-y-6">
                <p className="text-4xl font-semibold leading-relaxed font-oswald tracking-wide">
                  Get Expert Advice Online Now.
                </p>

                <ul className="text-lg font-light leading-relaxed tracking-wider list-disc list-inside font-montserrat space-y-2">
                  <li>Personalized Advice</li>
                  <li>International Perspective</li>
                  <li>Ongoing Support</li>
                </ul>
              </div>

              <button className="bg-gold text-white px-8 py-4 rounded-lg hover:bg-gold/80 transition-colors text-lg font-semibold cursor-pointer self-start mx-auto lg:mx-0">
                Book a Consultation
              </button>
            </div>
          </div>
          <div>
            <img src={CTAPicture} className="rounded-2xl shadow-2xl scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
