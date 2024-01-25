import SectionHeader from "@common/SectionHeader";
import { skills } from "./data";
import SkillCard from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SkillsSection = () => {
  return (
    <section className="Skills_Section section-container px-1">
      <SectionHeader>My Weapons</SectionHeader>
      <div className="select-none">
        <Swiper modules={[Mousewheel]} mousewheel grabCursor slidesPerView="auto" style={{ padding: "20px 0 55px 0" }}>
          {skills.map((skill, i) => (
            <SwiperSlide key={i} style={{ maxWidth: "300px", padding: "0 15px" }}>
              <div className="w-full h-[25vh] flex items-center justify-center">
                <SkillCard skill={skill} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsSection;
