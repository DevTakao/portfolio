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
import useNarrator from "@/hooks/useNarrator";

const SkillsSection = () => {
  const narrateRef = useNarrator("I'm more or less a JavaScript practitioner");
  const [activeId, setActiveId] = useState(0);

  return (
    <section ref={narrateRef} className="Skills_Section section-container px-1 relative overflow-hidden">
      <div className="Background absolute z-[0] w-full h-full top-0 left-0 blur-md flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.img
            {...fadeInAnim}
            key={activeId}
            src={skills[activeId].logo}
            className="w-[90%] h-[90%] object-contain translate-y-[25%]"
          />
        </AnimatePresence>
      </div>
      <div className="Backdrop absolute z-[1] w-full h-full top-0 left-0 bg-lightsoft bg-opacity-60" />
      <div className="Main relative z-[2]">
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
                <SkillCard skill={skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="Description min-h-[2rem] px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              {...fadeInAnim}
              className="max-w-screen-lg mx-auto text-lg text-justify md:text-center"
            >
              {skills[activeId]?.description || ""}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
