import VideoAsset from "../../assets/VideoShowcase.png";
const VideoShowcase = () => {
  return (
    <section id="VideoShowcaseSection" className="py-10">
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={VideoAsset}
              className="h-auto w-full max-h-128 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="text-center lg:text-left h-full">
            <div className="mb-8 flex flex-col justify-between h-full space-y-10">
              <div className="space-y-6">
                <p className="text-3xl font-semibold text-secondary leading-relaxed">
                  Listen to our expert talk about why this matters.
                </p>

                <p className="text-2xl leading-relaxed">
                  Living abroad brings opportunity—but it also brings{" "}
                  <span className="text-gold">financial uncertainty.</span> From{" "}
                  <span className="text-gold">investments to retirement</span>{" "}
                  planning, the right decisions today shape your security
                  tomorrow.
                </p>
              </div>

              <button className="bg-blue text-white px-8 py-4 rounded-lg hover:bg-blue/80 transition-colors text-2xl font-semibold cursor-pointer self-start">
                Learn What People Often Ask About
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
