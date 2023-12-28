const WebExpItem = ({ role, company, years }) => {
  return (
    <div className="px-6 py-3">
      <h3 className="text-xl font-bold">{role}</h3>
      <h4 className="text-lg font-semibold before:content-['@'] before:mr-1">{company}</h4>
      <span className="text-sm font-normal">{years}</span>
    </div>
  );
};

const WebExp = () => {
  return (
    <div className="text-left divide-y-2 divide-lightsoft p-8">
      <WebExpItem
        {...{
          role: "Web Developer & Technical Research Analyst",
          company: "Visible One, Singapore",
          years: "Jun 2023 - Present",
        }}
      />
      <WebExpItem
        {...{
          role: "Front-end Development Team Leader",
          company: "Nexstack, Singapore",
          years: "Aug 2022 - Jun 2023",
        }}
      />
      <WebExpItem
        {...{
          role: "Front-end Developer (React.js, Next.js)",
          company: "Nexstack, Singapore",
          years: "Mar 2022 - Aug 2022",
        }}
      />
    </div>
  );
};

export default WebExp;
