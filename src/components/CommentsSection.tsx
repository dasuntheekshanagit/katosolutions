import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Comment from "./Comment";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const testimonialsData = [
  {
    id: 1,
    image: "assets/img/testimonials/R.png",
    name: "Widuranga Gunawardana",
    role: "Consulting Engineer",
    rate: 5,
    quote:
      "KATO Solutions” had excellent follow through, great communication, clear understanding of the progression of the project. I would highly recommend them. I had no doubt they would make the best choice for me when I could not be there. They are one of the most highly organized companies I have ever dealt with. Well worth working with people who do things right. They had excellent communication– 6 stars! “KATO solutions have overall High quality workmenship .You get what you pay and also is well worth it.”👷‍♀️",
  },
  {
    id: 2,
    image: "assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    rate: 5,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    id: 2,
    image: "assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    rate: 3,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  // {
  //   id: 2,
  //   image: "assets/img/testimonials/testimonials-2.jpg",
  //   name: "Sara Wilsson",
  //   role: "Designer",
  //   rate: 4,
  //   quote:
  //     "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  // },
  // Add more testimonials as needed
];

const CommentsSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What our clients say about us</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 2000 }}
          slidesPerView={"auto"}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Comment
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                rate={testimonial.rate}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default CommentsSection;
