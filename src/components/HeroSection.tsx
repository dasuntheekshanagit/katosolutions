const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      {/* <div className="info d-flex align-items-center">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-6 text-center">
              <h2>Building Excellence Together</h2>
              <p>
                KATO Solutions is your go-to partner for reliable and
                high-quality Steel Fabricating services. We cater to a wide
                spectrum of clients, ensuring every project, big or small, is
                met with our best efforts and expertise. Join our satisfied
                clientele today.
              </p>
              <a href="#get-started" className="btn-get-started">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-item">
          <img src="assets/img/hero-carousel/1.webp" alt="" />
        </div>
        <div className="carousel-item active">
          <img src="assets/img/hero-carousel/2.webp" alt="" />
        </div>
        <div className="carousel-item">
          <img src="assets/img/hero-carousel/3.webp" alt="" />
        </div>
        <div className="carousel-item">
          <img src="assets/img/hero-carousel/4.webp" alt="" />
        </div>
        <div className="carousel-item">
          <img src="assets/img/hero-carousel/5.webp" alt="" />
        </div>
        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
