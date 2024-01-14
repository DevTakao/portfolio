const WebExpItem = ({ role, company, url, years }) => {
  return (
    <div className="px-6 py-3 flex flex-col items-start">
      <h3 className="text-xl font-bold">{role}</h3>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-lg font-semibold before:content-['@'] before:mr-1 hover:text-yellow transition duration-500 mb-2"
      >
        {company}
      </a>
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
          url: "https://visibleone.com/",
          years: "Jun 2023 - Present",
        }}
      />
      <WebExpItem
        {...{
          role: "Front-end Development Team Leader",
          company: "Nexstack, Singapore",
          url: "https://nexstack.sg/",
          years: "Aug 2022 - Jun 2023",
        }}
      />
      <WebExpItem
        {...{
          role: "Front-end Developer (React.js, Next.js)",
          company: "Nexstack, Singapore",
          url: "https://nexstack.sg/",
          years: "Mar 2022 - Aug 2022",
        }}
      />
    </div>
  );
};

export default WebExp;
