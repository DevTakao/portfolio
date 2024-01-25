import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@common/SectionHeader";
import { skills } from "./data";
import SkillCard from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { fadeInAnim } from "@animations";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SkillsSection = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="Skills_Section section-container px-1">
      <SectionHeader>My Weapons</SectionHeader>
      <div className="select-none">
        <Swiper
          modules={[Mousewheel]}
          mousewheel
          grabCursor
          centeredSlides
          slideToClickedSlide
          slidesPerView="auto"
          onSlideChange={({ realIndex }) => setActiveId(realIndex)}
          style={{ padding: "20px 0 55px 0" }}
        >
          {skills.map((skill, i) => (
            <SwiperSlide key={i} style={{ maxWidth: "300px", padding: "0 15px" }}>
              <div className="w-full h-[35vh] flex items-center justify-center">
                <SkillCard skill={skill} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="Description min-h-[2rem] px-10">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeId}
            {...fadeInAnim}
            className="max-w-screen-lg mx-auto text-lg text-justify md:text-center"
          >
            {skills[activeId]?.description || ""}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
