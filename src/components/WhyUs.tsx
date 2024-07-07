const WhyUs = () => {
  const services = [
    {
      icon: "bi bi-easel",
      title: "24x7 Support Service",
      description:
        "We provide round-the-clock support to ensure your projects run smoothly, no matter the time of day.",
      delay: "300",
    },
    {
      icon: "bi bi-patch-check",
      title: "Same Priority to Every Project",
      description:
        "Every project, big or small, receives our dedicated attention and respect, ensuring high standards of service.",
      delay: "400",
    },
    {
      icon: "bi bi-brightness-high",
      title: "High-Quality Products",
      description:
        "Our products are crafted with the highest quality materials and precision, ensuring durability and excellence in every project.",
      delay: "500",
    },
    {
      icon: "bi bi-brightness-high",
      title: "Post-Customer Service",
      description:
        "We offer exceptional post-customer service to address any concerns and maintain long-term satisfaction with our solutions.",
      delay: "600",
    },
  ];

  return (
    <section id="alt-services" className="alt-services section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div
            className="features-image col-lg-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="assets/img/alt-services.webp" alt="" />
          </div>

          <div
            className="col-lg-5 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Why Choose KATO Solutions</h3>
            <p>
              Discover the reasons why KATO Solutions is the preferred choice
              for construction projects of all sizes. Our commitment to quality
              and customer satisfaction sets us apart.
            </p>

            {services.map((service, index) => (
              <div
                className="icon-box d-flex position-relative"
                data-aos="fade-up"
                data-aos-delay={service.delay}
                key={index}
              >
                <i className={`${service.icon} flex-shrink-0`}></i>
                <div>
                  <h4>
                    <a href="" className="stretched-link">
                      {service.title}
                    </a>
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
