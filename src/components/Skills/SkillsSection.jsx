import SectionHeader from "@common/SectionHeader";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsSection = () => {
  const data = {
    labels: ["Learning", "Technical", "Teamwork", "Communication", "Design", "Debugging"],
    datasets: [
      {
        label: "Strength",
        data: [9.9, 9.2, 7.7, 8.5, 3, 9],
        backgroundColor: "rgba(77, 193, 255, 0.2)",
        borderColor: "rgba(77, 193, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      min: 0,
      max: 10,
    },
  };

  return (
    <section className="Skills_Section bg-darksoft py-10 px-10">
      <SectionHeader>Geek Stats</SectionHeader>
      <div className="Container max-w-screen-lg mx-auto px-5 grid grid-cols-1 md:grid-cols-2">
        <div className="PersonSVGWrapper hidden md:flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-dark"
              d="M13.9 2.999A1.9 1.9 0 1 1 12 1.1a1.9 1.9 0 0 1 1.9 1.899zM13.544 6h-3.088a1.855 1.855 0 0 0-1.8 1.405l-1.662 6.652a.667.667 0 0 0 .14.573.873.873 0 0 0 .665.33.718.718 0 0 0 .653-.445L10 9.1V13l-.922 9.219a.71.71 0 0 0 .707.781h.074a.69.69 0 0 0 .678-.563L12 14.583l1.463 7.854a.69.69 0 0 0 .678.563h.074a.71.71 0 0 0 .707-.781L14 13V9.1l1.548 5.415a.718.718 0 0 0 .653.444.873.873 0 0 0 .665-.329.667.667 0 0 0 .14-.573l-1.662-6.652A1.855 1.855 0 0 0 13.544 6z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </div>
        <div className="RadarWrapper flex items-center justify-center">
          <Radar data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
