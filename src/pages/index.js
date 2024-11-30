import IndexAbout from "@/Component/About/IndexAbout";
import Banner from "@/Component/Banner/Banner";
import FitnessCalculatorBanner from "@/Component/Banner/FitnessCalculatorBanner";
import IndexBlog from "@/Component/Blogs/IndexBlog";
import ImageGallery from "@/Component/Gallery/ImageGallery";
import SecondaryNav from "@/Component/OtherComponents/SecondaryNav";
import Testimonials from "@/Component/Testimonials/Testimonials";
import { useRef } from "react";

export default function Home() {
  const ref = useRef();
  return (
    <div>
      <div>
        <Banner ref={ref} />
      </div>
      <div ref={ref}>
        <SecondaryNav />
      </div>
      <div>
        <IndexAbout />
      </div>
      <div className="hashWrapper">
        <p>
          <span>#fitness</span>
          <span>#gymmotivation</span>
          <span>#workout</span>
          <span> #healthylifestyle </span>
        </p>
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <FitnessCalculatorBanner />
        <IndexBlog />
      </div>
      <div>
        <ImageGallery />
      </div>
    </div>
  );
}
