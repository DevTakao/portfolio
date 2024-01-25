import { hexToRgb } from "@utilities/color";
import { useSwiperSlide } from "swiper/react";

const SkillCard = ({ skill }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      data-active={swiperSlide.isActive}
      title={skill.name}
      style={{ "--shadow": hexToRgb(skill.hex) }}
      className="Skill_Card inline-flex flex-col items-center justify-center rounded-lg
    w-full h-full p-5 bg-light relative 
    transition-all duration-300 
    data-[active=false]:[box-shadow:0_2px_0px_0px_var(--shadow),0_-2px_0px_0px_var(--shadow),2px_0_0px_0px_var(--shadow),-2px_0_0px_0px_var(--shadow)] 
    data-[active=true]:[box-shadow:0_1px_10px_5px_var(--shadow),0_-1px_10px_5px_var(--shadow),1px_0_10px_5px_var(--shadow),-1px_0_10px_5px_var(--shadow)]"
    >
      <img
        data-active={swiperSlide.isActive}
        src={skill.logo}
        alt={skill.name}
        className="w-full object-contain data-[active=false]:h-full data-[active=true]:h-3/4 transition-all duration-500"
      />
      <div
        data-active={swiperSlide.isActive}
        className="w-full data-[active=false]:h-0 data-[active=true]:h-[25%] flex items-end justify-center transition-all duration-500"
      >
        <p
          data-active={swiperSlide.isActive}
          className="text-2xl font-medium text-[--shadow] origin-bottom data-[active=false]:scale-y-0 data-[active=false]:opacity-0 data-[active=true]:scale-y-100 data-[active=true]:opacity-100 transition-all duration-500"
        >
          {skill.name}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
