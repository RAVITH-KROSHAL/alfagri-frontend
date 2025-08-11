import TestimonialSlider from "./Home/Testimonial";
import Herosection from "./Home/Herosection";
import Featuressection from './Home/Featuressection';
import ImageSection from "./Home/Imagesection";





const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100">

      {/* Hero Section */}
         <Herosection/>

      {/* Features Section */}
         <Featuressection/>
   
      {/* Optional: Image Section */}
         <ImageSection />

      {/* TestimonialSlider */}
         <TestimonialSlider />
    </div>
  );
};

export default Home;
