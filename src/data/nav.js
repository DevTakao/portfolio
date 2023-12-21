import BasicInfo from "../components/PortfolioPage/contents/BasicInfo";
import Education from "../components/PortfolioPage/contents/Education";
import Hobbies from "../components/PortfolioPage/contents/Hobbies";
import AcademicSkills from "../components/PortfolioPage/contents/AcademicSkills";
import ProgrammingSkills from "../components/PortfolioPage/contents/ProgrammingSkills";
import OtherSkills from "../components/PortfolioPage/contents/OtherSkills";
import WebExp from "../components/PortfolioPage/contents/WebExp";

export const NAV = {
  profile: {
    basicInfo: BasicInfo,
    education: Education,
    hobbies: Hobbies,
  },
  skills: {
    academics: AcademicSkills,
    programming: ProgrammingSkills,
    other: OtherSkills,
  },
  experience: {
    web: WebExp,
  },
};
