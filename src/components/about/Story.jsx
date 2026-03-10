const Story = () => {
  return (
    <section id="StorySection" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-oswald mb-4 tracking-wide">
            My Story
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        <div className="bg-linear-to-br from-gold/20 to-white border border-gold/10 rounded-2xl p-12 shadow-lg">
          <div className="flex items-start space-x-6 mb-8">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <i class="fa-solid fa-quote-left text-white text-2xl"></i>
              </div>
            </div>
            <div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I know exactly what it feels like to be an expat navigating a
                  foreign financial system. Years ago, I found myself in a new
                  country, overwhelmed by unfamiliar banking systems, confusing
                  tax regulations, and investment options that seemed designed
                  to confuse rather than help.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The sleepless nights worrying about making the wrong
                  decisions, the frustration of conflicting advice, and the fear
                  of losing hard-earned money to mistakes that could have been
                  avoided — I lived through all of it.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  That struggle became my purpose. I dedicated myself to
                  mastering international finance, not just for my own benefit,
                  but to ensure other expats wouldn't have to go through the
                  same painful learning curve I did.
                </p>
                <p className="text-lg font-semibold leading-relaxed text-blue-900">
                  Today, my mission is simple: to be the advisor I wish I had
                  when I first arrived — someone who truly understands the expat
                  experience and can guide you to financial clarity and
                  security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
