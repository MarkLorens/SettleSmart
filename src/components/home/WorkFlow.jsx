import Step1Image from "../../assets/workflow/Step-1.png";
import Step2Image from "../../assets/workflow/Step-2.png";
import Step3Image from "../../assets/workflow/Step-3.png";
import Step4Image from "../../assets/workflow/Step-4.png";

import { useEffect, useRef, useState } from "react";

const WorkFlow = () => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const step1Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !step1Ref.current) return;

      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const step1Rect = step1Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = step1Rect.top - windowHeight / 2;
      const end = wrapperRect.bottom - windowHeight / 2;

      const total = end - start;
      const current = windowHeight / 2 - start;

      const percent = Math.min(Math.max(current / total, 0), 1);

      setProgress(percent * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="WorkFlowSection" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How it Works</h2>
          <p className="text-xl text-gray-600">Our 4-Step Flow</p>
        </div>
        <div id="FlowLayout">
          <div
            id="FlowWrapper"
            ref={wrapperRef}
            className="max-w-5xl mx-auto relative"
          >
            <div
              id="Step-1"
              className="relative min-h-16 pb-20 z-10 text-right lg:text-left"
            >
              <div className="absolute lg:left-1/2 lg:-translate-x-1/2 bg-blue text-white w-16 h-16 rounded-lg flex items-center justify-center">
                1
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-0 lg:gap-0 justify-center items-center ml-16 lg:ml-0 flex flex-col">
                <div className="space-y-2 order-1">
                  <h2 className="font-semibold text-xl">
                    Understand <span className="text-gold">your</span> situation
                  </h2>
                  <p className="tracking-wide">
                    Every client’s situation is different—especially when living
                    abroad. We begin with a detailed conversation to understand
                    your goals, current finances, residency status, and
                    long-term plans.
                  </p>
                </div>
                <div className="max-h-75 flex items-center order-2">
                  <img
                    src={Step1Image}
                    alt="Step 1 Illustration"
                    className="scale-50 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div
              id="Step-2"
              className="relative min-h-16 pb-20 z-10 text-right lg:text-left"
            >
              <div
                ref={step1Ref}
                className="absolute lg:left-1/2 lg:-translate-x-1/2 bg-blue text-white w-16 h-16 rounded-lg flex items-center justify-center"
              >
                2
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-0 lg:gap-30 justify-center items-center ml-16 lg:ml-0 flex flex-col">
                <div className="max-h-75 flex items-center order-2">
                  <img
                    src={Step2Image}
                    alt="Step 2 Illustration"
                    className="scale-50 rounded-xl"
                  />
                </div>
                <div className="space-y-2 order-1">
                  <h2 className="font-semibold text-xl">
                    Analyze the details that{" "}
                    <span className="text-gold">matter</span>
                  </h2>
                  <p className="tracking-wide">
                    We review your financial position through a cross-border
                    lens, identifying risks, inefficiencies, and opportunities
                    that may not be immediately obvious—particularly across tax,
                    investment, and regulatory considerations.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="Step-3"
              className="relative min-h-16 pb-20 z-10 text-right lg:text-left"
            >
              <div className="absolute lg:left-1/2 lg:-translate-x-1/2 bg-blue text-white w-16 h-16 rounded-lg flex items-center justify-center">
                3
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-0 lg:gap-30 justify-center items-center ml-16 lg:ml-0 flex flex-col">
                <div className="space-y-2 order-1">
                  <h2 className="font-semibold text-xl">
                    Create a <span className="text-gold">tailored</span>{" "}
                    strategy
                  </h2>
                  <p className="tracking-wide">
                    Based on our analysis, we develop a clear, practical
                    financial strategy aligned with your goals. This includes
                    recommendations designed to work across jurisdictions and
                    adapt as your life evolves.
                  </p>
                </div>
                <div className="max-h-75 flex items-center order-2">
                  <img
                    src={Step3Image}
                    alt="Step 3 Illustration"
                    className="scale-50 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div
              id="Step-4"
              className="relative min-h-16 pb-20 z-10 text-right lg:text-left"
            >
              <div className="absolute lg:left-1/2 lg:-translate-x-1/2 bg-blue text-white w-16 h-16 rounded-lg flex items-center justify-center">
                4
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-0 lg:gap-30 justify-center items-center ml-16 lg:ml-0 flex flex-col">
                <div className="max-h-75 flex items-center order-2">
                  <img
                    src={Step4Image}
                    alt="Step 4 Illustration"
                    className="scale-50 rounded-xl"
                  />
                </div>
                <div className="space-y-2 order-1">
                  <h2 className="font-semibold text-xl">
                    We
                    <span className="text-gold"> support you</span> over the
                    long term
                  </h2>
                  <p className="tracking-wide">
                    Your circumstances will change—and your financial plan
                    should evolve with them. We provide ongoing guidance,
                    regular reviews, and continued support to ensure your
                    strategy remains aligned with your goals.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="ProcessBar"
              className="w-1 h-full absolute bg-blue/40 top-0 left-8 lg:left-1/2 lg:-translate-x-1/2 rounded-lg overflow-hidden"
            >
              <div
                className="w-full bg-blue transition-[height] duration-1000 ease-out"
                style={{ height: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
