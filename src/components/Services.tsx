import services from "../../data/Services";

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Number One Steel Fabricating and the Maintenance Company in Sri Lanka
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={`${100 * (index + 1)}`}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <img src={service.icon} className="icon-image" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="readmore stretched-link">
                  Read more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
