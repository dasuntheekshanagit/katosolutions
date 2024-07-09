interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
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
            <li className="current">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;
