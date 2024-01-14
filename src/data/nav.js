import BasicInfo from "@components/Portfolio/contents/BasicInfo";
import Education from "@components/Portfolio/contents/Education";
import Hobbies from "@components/Portfolio/contents/Hobbies";
import ProgrammingSkills from "@components/Portfolio/contents/ProgrammingSkills";
import OtherSkills from "@components/Portfolio/contents/OtherSkills";
import WebExp from "@components/Portfolio/contents/WebExp";
import Books from "@components/Portfolio/contents/Books";
import StartupExp from "@components/Portfolio/contents/StartupExp";
import Projects from "@components/Portfolio/contents/Projects";

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
    projectsDone: Projects,
    webDevelopmentExperience: WebExp,
    startupExperience: StartupExp,
  },
};
