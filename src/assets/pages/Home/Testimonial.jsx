import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "Ravith, Kanthale",
    feedback: "This is the best tourism website I've ever used!",
  },
    {
    name: "Shashi, Dabulla",
    feedback: "This is the best tourism website I've ever used!",
  },
  {
    name: "Kamal, Polonnaruwa",
    feedback: "Easy to use and very informative.",
  },
  {
    name: "Nuwani, Hambanthota",
    feedback: "Highly recommend it to anyone traveling Sri Lanka.",
  },
   {
    name: "Kamal, Galle",
    feedback: "We’ve seen a 30% yield increase since adopting ALFAGRI’s platform.!",
  },
  {
    name: "Nimal, Anuradhapura",
    feedback: "From irrigation to pest control, everything is now automated and efficient.",
  },
  {
    name: "Dulanjalee, Mathale",
    feedback: "We’ve seen a 30% yield increase since adopting ALFAGRI’s platform.",
  },
    {
    name: "Saman Perera, Kurunegala",
    feedback: "Thanks to Alfagri, I increased my yield by 30%. The smart tools are easy to use and accurate!",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-10">
        {/* Title */}
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        What Our Farmers Say
      </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white shadow-xl rounded-xl text-center">
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <h4 className="mt-4 font-semibold text-green-700">—  {testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
