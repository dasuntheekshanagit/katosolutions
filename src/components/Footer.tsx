const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">UpConstruction</span>
            </a>
            <div className="footer-contact pt-3">
              <p>KATO Solutions</p>
              <p>Kalupahana, Poruwedanda</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+94 74 220 7362</span>
              </p>
              <p>
                <strong>Email:</strong> <span>contact@katosolutions.lk</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/services/construction">Construction</a>
              </li>
              <li>
                <a href="/services/new-product-development">
                  New Product Development
                </a>
              </li>
              <li>
                <a href="/services/steel-fabrication">Steel Fabrication</a>
              </li>
              <li>
                <a href="/services/electrical-and-electronic-repair">
                  Electrical and Electronic Repair
                </a>
              </li>
              <li>
                <a href="/services/ac-and-refrigeration">
                  A/C and Refrigeration
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/services/comprehensive-maintenance">
                  Comprehensive Maintenance
                </a>
              </li>
              <li>
                <a href="/services/bio-medical-equipment-repair">
                  Bio Medical Equipment Repair
                </a>
              </li>
              <li>
                <a href="/services/finishing-services">Finishing Services</a>
              </li>
              <li>
                <a href="/services/demolish-services">Demolish Services</a>
              </li>
            </ul>
          </div>

          {/* <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li>
                <a href="#">Molestiae accusamus iure</a>
              </li>
              <li>
                <a href="#">Excepturi dignissimos</a>
              </li>
              <li>
                <a href="#">Suscipit distinctio</a>
              </li>
              <li>
                <a href="#">Dilecta</a>
              </li>
              <li>
                <a href="#">Sit quas consectetur</a>
              </li>
            </ul>
          </div> */}

          {/* <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li>
                <a href="#">Ipsam</a>
              </li>
              <li>
                <a href="#">Laudantium dolorum</a>
              </li>
              <li>
                <a href="#">Dinera</a>
              </li>
              <li>
                <a href="#">Trodelas</a>
              </li>
              <li>
                <a href="#">Flexo</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <strong className="px-1 sitename">KATO Solutions</strong> All Rights
          Reserved
        </p>
        {/* <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
