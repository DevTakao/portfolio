const WebExpItem = ({ role, company, url, years }) => {
  return (
    <div className="px-6 py-3 flex flex-col items-start">
      <h3 className="text-base md:text-xl font-bold">{role}</h3>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-base md:text-lg font-medium md:font-semibold before:content-['@'] before:mr-1 hover:text-blue transition duration-500 mb-2"
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
          role: "Senior Web Developer & Technical Researcher",
          company: "Visible One, Singapore",
          url: "https://visibleone.com/",
          years: "Jun 2023 - Present",
        }}
      />
      <WebExpItem
        {...{
          role: "Front-end Lead",
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
      <WebExpItem
        {...{
          role: "Founder",
          company: "Myan Digital",
          url: "https://fb.com/myandigital.mm",
          years: "Aug 2020 - Feb 2021",
        }}
      />
      <WebExpItem
        {...{
          role: "Freelance Developer",
          company: "Self-employed",
          url: "",
          years: "Sep 2018 - Jun 2020",
        }}
      />
    </div>
  );
};

export default WebExp;
