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

    try {
      await addDoc(collection(db, "messages"), newMessage);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: `Thank you for your message. We will get back to you soon.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setRole("");
      setMessage("");
      setPhoto(null);
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
    }
  };

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <section id="get-started" className="get-started section">
      <div className="container">
        <form onSubmit={submitForm} className="php-email-form">
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
            <div className="col-md-12">
              <input
                type="file"
                className="form-control"
                name="photo"
                onChange={handlePhotoChange}
              />
            </div>
            <div className="col-md-12">
              <div className="rating-container">
                <label>Rating: </label>
                <Rating
                  count={5}
                  onChange={ratingChanged}
                  size={30}
                  activeColor="#ffd700"
                />
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
