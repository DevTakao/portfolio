import { FaAngleDoubleRight } from "react-icons/fa";

const Projects = () => {
  const data = [
    {
      name: "Chrome Extension",
      industry: "Software",
      client: "",
      stack: ["TypeScript", "CRXJS", "React", "Manifest V3"],
    },
    {
      name: "CMS Dashboard",
      industry: "Engineering/Science",
      client: "",
      stack: ["HTML", "CSS", "React", "TypeScript", "Tailwind"],
    },
    {
      name: "PDF & QR Code Generator",
      industry: "Advertisement",
      client: "",
      stack: ["Pixi.js", "EJS", "HTML", "CSS", "React"],
    },
    {
      name: "API Migration",
      industry: "Event Management",
      client: "",
      stack: ["Microsoft Dynamics CRM", "MariaDB", "MongoDB", "AWS Lambda", "Node.js", "Vue.js", "Nuxt.js", "Pug"],
    },
    {
      name: "SVG & CSS/JS Animations",
      industry: "Reusable UI Library Project",
      client: "",
      stack: ["HTML", "CSS", "Tailwind", "TypeScript", "Framer Motion", "Storybook"],
    },
    {
      name: "Video Monitoring & Location Dashboard",
      industry: "Administrative",
      client: "(A Singapore Government Agency)",
      stack: ["Next.js", "Zustand", "Leaflet.js", "Strapi"],
    },
    {
      name: "Supermarket Supplier Portal",
      industry: "E-Commerce",
      client: "Sheng Siong Supermarket",
      stack: ["Next.js", "Strapi", "GraphQL"],
    },
    {
      name: "Landing Page",
      industry: "Social",
      client: "YTU Anime Club",
      stack: ["HTML", "CSS", "Anime.js"],
    },
  ];

  return (
    <div className="p-8 text-left">
      <ul className="divide-y-2 divide-lightsoft">
        {data.map((d, i) => (
          <li key={i} className="py-7">
            <h3 className="font-medium text-xl">{d.name}</h3>
            <p className="font-light text-lg text-blue mb-4">{d.industry}</p>
            <p className="font-light text-base flex items-start">
              <span className="font-medium mr-2 inline-flex items-center justify-between">
                Client
                <FaAngleDoubleRight className="mx-1" />
              </span>
              {d.client || "CONFIDENTIAL"}
            </p>
            <p className="font-light text-base flex items-start">
              <span className="font-medium mr-2 inline-flex items-center justify-between">
                Technologies
                <FaAngleDoubleRight className="mx-1" />
              </span>
              {d.stack.join(" | ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
