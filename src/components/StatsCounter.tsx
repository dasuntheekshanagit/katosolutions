import { useEffect, useCallback } from "react";
import { CountUp } from "countup.js";

const StatsCounter = () => {
  const formatNumberWithPlus = useCallback((num: number): string => {
    return `${num}+`;
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".purecounter");
    counters.forEach((counter) => {
      const endValueAttr = counter.getAttribute("data-count");
      if (endValueAttr) {
        const endValue = parseInt(endValueAttr, 10);
        if (counter instanceof HTMLElement) {
          const countUp = new CountUp(counter, endValue, {
            formattingFn: formatNumberWithPlus,
          });
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
        }
      }
    });
  }, [formatNumberWithPlus]);

  return (
    <section id="stats-counter" className="stats-counter section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Stats</h2>
        <p>
          High Standards, Unmatched Service - For All Your Steel Fabricating
          Needs
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
              <div>
                <span className="purecounter" data-count="232">
                  0
                </span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
              <div>
                <span className="purecounter" data-count="521">
                  0
                </span>
                <p>Projects</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-building color-green flex-shrink-0"></i>
              <div>
                <span className="purecounter" data-count="8">
                  0
                </span>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="bi bi-people color-pink flex-shrink-0"></i>
              <div>
                <span className="purecounter" data-count="15">
                  0
                </span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
