import Dashboard from "@assets/images/projects/dashboard.svg";
import Database from "@assets/images/projects/database.svg";
import Geolocation from "@assets/images/projects/geolocation.svg";
import Animations from "@assets/images/projects/animations.svg";
import Supermarket from "@assets/images/projects/supermarket.svg";
import ProjectCard from "./ProjectCard"; // Import the new component
import SectionHeader from "@common/SectionHeader";
import ConstellationsSVG from "@assets/images/endless-constellation.svg";
import useNarrator from "@/hooks/useNarrator";

const ProjectsSection = () => {
  const projectsData = [
    {
      image: Dashboard,
      title: "Dashboard & CMS",
      description:
        "Standard combinations of elegant e-commerce and post dashboards to analyze data at a glance and CMS systems to manage the content of the websites.",
    },
    {
      image: Geolocation,
      title: "Geolocation",
      description:
        "Where am I? Where are you? Where is everyone? Maps and pins come into rescue to help discover the important locations and report them on the dashboard.",
    },
    {
      image: Supermarket,
      title: "Merchant Portal",
      description:
        "Communication channels between merchants to submit orders, send emails, invoices and receipts conveniently.",
    },
    {
      image: Animations,
      title: "Animations",
      description:
        "Breathing life into digital content, making them feel more immersive and fun. It's not just a website anymore. It's an alternate world!",
    },
    {
      image: Database,
      title: "Database Migration",
      description:
        "Migrating an existing system with important data from outdated technology stacks to modern blazing fast and secure ones, with little to no loss of data.",
    },
  ];

  const narrateRef = useNarrator(
    "I'm proud of every project I did. Ya' see those cyber-ish animations? I'm proud of them too."
  );

  return (
    <section ref={narrateRef} className="Projects_Section section-container relative">
      <div
        style={{ backgroundImage: `url(${ConstellationsSVG})` }}
        className="absolute z-[0] top-0 left-0 w-full h-full opacity-30 bg-fixed bg-repeat"
      />
      <div className="relative z-[1]">
        <SectionHeader>Projects I Have Done</SectionHeader>
        <div className="max-w-screen-lg mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} imageFirst={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
