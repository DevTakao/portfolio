const ProgrammingSkills = () => {
  const skills = [
    "TypeScript",
    "JavaScript / ECMAScript",
    "React.js",
    "Next.js",
    "Zustand",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML",
    "HTML Templating",
    "CSS",
    "SCSS/SASS",
    "CSS in JS",
    "Tailwind",
    "Bootstrap",
    "Web Animations",
    "Headless CMS like Strapi",
    "SQL",
    "Vite, webpack, babel, tsc",
    "npm, yarn",
    "Git, GitHub, GitLab",
    "AWS",
    "3D with Three.js",
    "2D with Pixi.js",
    "Web Security",
    "Browser Extensions",
  ];

  return (
    <div className="p-8">
      <ul className="divide-y-2 divide-lightsoft">
        {skills.map((skill, i) => (
          <li key={i} className="py-4">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingSkills;
