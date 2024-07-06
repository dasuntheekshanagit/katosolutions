interface Props {
  page: string;
}

const NavBar = ({ page }: Props) => {
  // Function to determine if the link is active
  const getNavLinkClass = (path: string): string => {
    return page === path ? "active" : "";
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <h1 className="sitename">KATO Solutions</h1> <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className={getNavLinkClass("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className={getNavLinkClass("aboutus")}>
                About Us
              </a>
            </li>
            {/* Uncomment or modify as needed */}
            {/* <li><a href="services.html" className={getNavLinkClass('/services')}>Services</a></li> */}
            <li className={`dropdown ${getNavLinkClass("services")}`}>
              <a href="/services">
                <span>Services</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="services">Our Services</a>
                </li>
                <li>
                  <a href="construction">Construction</a>
                </li>
                <li>
                  <a href="new-product-development">New Product Development</a>
                </li>
                <li>
                  <a href="steel-fabrication">Steel Fabrication</a>
                </li>
                <li>
                  <a href="electrical-and-electronic-repair">
                    Electrical and Electronic Repair
                  </a>
                </li>
                <li>
                  <a href="ac-and-refrigeration">A/C and Refrigeration</a>
                </li>
                <li>
                  <a href="comprehensive-maintenance">
                    Comprehensive Maintenance
                  </a>
                </li>
                <li>
                  <a href="bio-medical-equipment-repair">
                    Bio Medical Equipment Repair
                  </a>
                </li>
                <li>
                  <a href="finishing-services">Finishing Services</a>
                </li>
                <li>
                  <a href="demolish-services">Demolish Services</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/gallery" className={getNavLinkClass("gallery")}>
                Gallery
              </a>
            </li>
            {/* <li>
              <a href="projects" className={getNavLinkClass("projects")}>
                Projects
              </a>
            </li> */}
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
