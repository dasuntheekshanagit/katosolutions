// Removed unused imports and fixed the 'rows' attribute type issue
import { Component } from "react";
import "aos/dist/aos.css";

class GetStarted extends Component {
  render() {
    return (
      <section id="get-started" className="get-started section">
        <div className="container">
          <div className="row justify-content-between gy-4">
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div className="content">
                <h3>Building-Excellence-Together.</h3>
                <p>
                  KATO Solutions is your go-to partner for reliable and
                  high-quality Steel Fabricating services. We cater to a wide
                  spectrum of clients, ensuring every project, big or small, is
                  met with our best efforts and expertise. Join our satisfied
                  clientele today.
                </p>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
              <form
                action="forms/quote.php"
                method="post"
                className="php-email-form"
              >
                <h3>Leave Us a Message</h3>
                {/* <p>
                  Vel nobis odio laboriosam et hic voluptatem. Inventore vitae
                  totam. Rerum repellendus enim linead sero park flows.
                </p> */}
                <div className="row gy-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6} // Changed from string to number
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your quote request has been sent successfully. Thank you!
                    </div>
                    <button type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GetStarted;
