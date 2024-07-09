import { useState, ChangeEvent } from "react";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/firebaseconfig";
import Rating from "react-rating-stars-component";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoName, setPhotoName] = useState("");
  const [rating, setRating] = useState<number>(0);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let photoURL = "";
    if (photo) {
      const photoRef = ref(
        storage,
        `reviews/${photo.name}_${new Date().getTime()}`
      );
      const snapshot = await uploadBytes(photoRef, photo);
      photoURL = await getDownloadURL(snapshot.ref);
    }

    const newMessage = {
      name,
      role,
      message,
      photoURL,
      rating,
      timestamp: new Date(),
    };
    console.log(newMessage);

    try {
      await addDoc(collection(db, "reviewsubmit"), newMessage);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `We appreciate you taking the time to share your thoughts with us.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setRole("");
      setMessage("");
      setPhoto(null);
      setPhotoName("");
      setRating(0);
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

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setPhotoName(e.target.files[0].name);
    }
  };

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <section id="custom-get-started" className="custom-get-started section">
      <div className="custom-container">
        <div className="custom-content-wrapper">
          <div className="custom-form-container">
            <form onSubmit={submitForm} className="custom-php-email-form">
              <div className="row gy-3  text-center">
                <h3>Rate Us</h3>
                <div className="col-md-12">
                  <div className="custom-rating-container">
                    <label>Rating: </label>
                    <Rating
                      count={5}
                      onChange={ratingChanged}
                      size={30}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
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
                    type="text"
                    className="form-control"
                    name="role"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Review"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                {/* <div className="col-md-12">
                  <input
                    type="file"
                    className="custom-form-control"
                    name="photo"
                    onChange={handlePhotoChange}
                  />
                </div> */}
                <div className="col-md-12">
                  <label
                    htmlFor="fileUpload"
                    className="file-upload btn btn-primary btn-block rounded-pill shadow"
                  >
                    <i className="fa fa-upload mr-2"></i> Browse for Image ...
                    <input
                      id="fileUpload"
                      type="file"
                      style={{ display: "none" }}
                      name="photo"
                      onChange={handlePhotoChange}
                    />
                  </label>
                  {photoName && <p>Selected file: {photoName}</p>}
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="custom-btn btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="custom-message">
            <h2>Your review is important to us!</h2>
            <p>
              We appreciate your feedback and will use it to improve our
              services. Thank you for taking the time to share your thoughts
              with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
