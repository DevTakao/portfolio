import Dashboard from "@assets/images/projects/dashboard.svg";
import Database from "@assets/images/projects/database.svg";
import Geolocation from "@assets/images/projects/geolocation.svg";
import Animations from "@assets/images/projects/animations.svg";
import Supermarket from "@assets/images/projects/supermarket.svg";
import ProjectCard from "./ProjectCard"; // Import the new component

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
        "Breathing life into digital content, making them feel more immersive and fun. It's not just a website anymore. It's an alternative world!",
    },
    {
      image: Database,
      title: "Database Migration",
      description:
        "Migrating an existing system with important data from outdated technology stacks to modern blazing fast and secure ones, with little to no loss of data.",
    },
  ];

  return (
    <section className="Projects_Section py-24 px-10 bg-lightsoft">
      <h2 className="text-center text-4xl font-medium mb-24">Projects I Have Done</h2>
      <div className="max-w-screen-lg mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} imageFirst={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
