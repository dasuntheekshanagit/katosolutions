import ServicesData from "../../data/ServicesData";
import { NavLink } from "react-router-dom";

interface ServiceDetailsProps {
  serviceId: string;
}

const ServiceDetails = ({ serviceId }: ServiceDetailsProps) => {
  const service = ServicesData.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section id="service-details" className="service-details section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="services-list">
              {ServicesData.map((s) => (
                <NavLink
                  to={`/services/${s.id}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  key={s.id}
                >
                  {s.name}
                </NavLink>
              ))}
            </div>
            <h4>Who we are?</h4>
            <p>
              Experience the KATO Solutions difference, where quality meets
              reliability. Our construction services cater to both top-tier
              companies and small households, giving each the attention and
              respect they deserve. Trust us to handle your project with care
              and precision.
            </p>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid services-img"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
