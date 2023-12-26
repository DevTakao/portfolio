import BasicInfo from "../components/PortfolioPage/contents/BasicInfo";
import Education from "../components/PortfolioPage/contents/Education";
import Hobbies from "../components/PortfolioPage/contents/Hobbies";
import ProgrammingSkills from "../components/PortfolioPage/contents/ProgrammingSkills";
import OtherSkills from "../components/PortfolioPage/contents/OtherSkills";
import WebExp from "../components/PortfolioPage/contents/WebExp";
import Books from "../components/PortfolioPage/contents/Books";
import StartupExp from "../components/PortfolioPage/contents/StartupExp";

export const NAV = {
  profile: {
    basicInfo: BasicInfo,
    education: Education,
    hobbies: Hobbies,
  },
  skills: {
    webSkills: ProgrammingSkills,
    otherSkills: OtherSkills,
    bookRecommendations: Books,
  },
  experience: {
    webDevelopmentExperience: WebExp,
    startupExperience: StartupExp,
  },
};
