import { useState } from "react";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

const GetStarted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

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
    }
  };

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
              <p>
                Every inquiry is of utmost importance to us, and we provide
                equal attention to all. Our experienced and qualified team
                members are our greatest strength. They are dedicated to
                ensuring the safety and satisfaction of you, your company, your
                family, and especially your children.
              </p>
              <p>
                Join us and experience our professional, unmatched doorstep
                service. Experience the difference with KATO Solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
            <form
              method="post"
              className="php-email-form"
              onSubmit={submitForm}
            >
              <h3>Leave Us a Message</h3>
              <div className="row gy-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Contact No"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {/*   <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your quote request has been sent successfully. Thank you!
                  </div> */}
                  <button type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
