const OurStory = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row position-relative">
          <div
            className="col-lg-7 about-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="assets/img/about.webp" alt="About Us" />
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <h2 className="inner-title">KATO Solutions</h2>
            <div className="our-story">
              <h4>Est 2017</h4>
              <h3>Our Story</h3>
              <p>
                In 2017, we transitioned our primary business focus from
                Transport to Steel Fabrication and related products and
                services. At KATO Solutions, we prioritize client satisfaction,
                product and service durability, quality, and the safety of our
                end users.
              </p>
              <p>
                Our business has been expanding steadily, and in 2021, we
                ventured into building construction. We cater to a diverse
                clientele, ranging from leading companies in Sri Lanka to small
                household units. Our consistent service extends to Super Market
                Chains, Hotels, Hospitals and Property Development companies.
              </p>
              <p>
                Join us and experience our professional, unmatched doorstep
                service. Experience the difference with KATO Solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
