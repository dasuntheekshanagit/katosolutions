const Services = () => {
  const services = [
    {
      icon: "/assets/img/icons/construction.png",
      title: "Construction",
      description:
        "Comprehensive construction services tailored to meet your specific needs. From planning and design to execution and finishing, we ensure every project is completed with the highest standards of quality and safety.",
      link: "construction.html",
    },
    {
      icon: "/assets/img/icons/draft.png",
      title: "New Product Development",
      description:
        "Innovating new industry production with cutting-edge technology. We bring your ideas to life with our expert development team, transforming concepts into reality through meticulous planning and execution.",
      link: "new-product-development.html",
    },
    {
      icon: "/assets/img/icons/welding.png",
      title: "Steel Fabrication",
      description:
        "Precision-crafted steel structures tailored to meet your construction needs. Our expertise ensures durability, quality, and safety in every project, delivering robust and reliable steel solutions.",
      link: "steel-fabrication.html",
    },
    {
      icon: "/assets/img/icons/eco-house.png",
      title: "Electrical and Electronic Repair",
      description:
        "Expert repair services for electrical and electronic systems, ensuring optimal performance and longevity. Our skilled technicians handle everything from troubleshooting and diagnostics to repairs and maintenance.",
      link: "electrical-electronic-repair.html",
    },
    {
      icon: "/assets/img/icons/fridge.png",
      title: "A/C and Refrigeration",
      description:
        "Reliable A/C and refrigeration services to keep your systems running smoothly and efficiently. We offer installation, maintenance, and repair services to ensure your comfort and convenience.",
      link: "ac-refrigeration.html",
    },
    {
      icon: "/assets/img/icons/repair-service.png",
      title: "Comprehensive Maintenance",
      description:
        "Reliable maintenance services for air conditioning, electrical systems, plumbing, metal structures, cement, and wooden elements. Our comprehensive approach ensures optimal performance and longevity of your assets.",
      link: "comprehensive-maintenance.html",
    },
    {
      icon: "/assets/img/icons/pulse.png",
      title: "Bio Medical Equipment Repair",
      description:
        "Expert repair services for biomedical equipment, specializing in the precision repair of steel components. Our skilled technicians ensure your medical devices are restored to optimal performance, maintaining the highest standards of safety and reliability.",
      link: "bio-medical-equipment-repair.html",
    },
    {
      icon: "/assets/img/icons/maintenance.png",
      title: "Finishing",
      description:
        "High-quality finishing services to add the perfect final touch to your construction projects. Our expert team ensures a polished and professional look, enhancing the overall appeal and functionality of your spaces.",
      link: "finishing.html",
    },
    {
      icon: "/assets/img/icons/wrecking-ball.png",
      title: "Demolish",
      description:
        "Safe and efficient demolition services to prepare sites for new developments. Our team ensures the controlled removal of structures with minimal disruption, following strict safety protocols and environmental standards.",
      link: "demolish.html",
    },
  ];

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
