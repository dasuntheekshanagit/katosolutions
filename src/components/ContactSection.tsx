import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../firebase/firebaseconfig";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);

    const newMessage = {
      name,
      email,
      phone,
      message,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "messages"), newMessage);
      console.log("Submit");
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `Thank you for your message. We will get back to you soon.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: `Something went wrong. Please try again.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>KATO Solutions, Kalupahana, Poruwedanda</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+94 74 220 7362</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>contact@katosolutions.lk</p>
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-1">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.3786738358845!2d80.1144010749947!3d6.723563993272422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDMnMjQuOCJOIDgwwrAwNycwMS4xIkU!5e0!3m2!1sen!2slk!4v1722077695554!5m2!1sen!2slk"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="col-lg-6">
            <form
              onSubmit={submitForm}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Contact No"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Loading</div>}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
