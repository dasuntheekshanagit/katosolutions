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
    image: "assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    role: "Ceo & Founder",
    rate: 2,
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
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
  {
    id: 2,
    image: "assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
    rate: 4,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  // Add more testimonials as needed
];

const CommentsSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
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
