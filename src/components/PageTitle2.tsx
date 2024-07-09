import ServicesData from "../../data/ServicesData";

interface Props {
  title: string;
}

const PageTitle2 = ({ title }: Props) => {
  const service = ServicesData.find((s) => s.id === title);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div
      className="page-title"
      style={{ backgroundImage: "url(assets/img/page-title-bg.webp)" }}
    >
      <div className="container position-relative">
        <h1>{title}</h1>
        <nav className="breadcrumbs">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li className="current">{service.title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle2;
