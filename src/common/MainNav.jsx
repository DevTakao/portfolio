import { IoPersonOutline } from "react-icons/io5";
import { GiCrossedSwords, GiSpellBook } from "react-icons/gi";
import { useAppStore } from "../store/appStore";

const MainNav = () => {
  const { currentMain, updateMain } = useAppStore((state) => ({
    currentMain: state.currentMain,
    updateMain: state.updateMain,
  }));

  return (
    <div className="z-50 inline-block mb-0 sm:mb-6 text-left lg:mb-0">
      <ul className="flex flex-row lg:flex-col">
        <li>
          <button
            onClick={() => updateMain("profile")}
            style={{ boxShadow: "0px 0px 8px #000" }}
            className={`inline-block p-1 sm:p-2 mx-1 sm:mx-3 sm:my-2 transition duration-500 w-[60px] h-[60px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 ${
              currentMain === "profile" ? "bg-yellow" : "bg-light"
            } border-dark hover:bg-yellow`}
            title="Occupation and background"
          >
            <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
              <IoPersonOutline size={48} />
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => updateMain("experience")}
            style={{ boxShadow: "0px 0px 8px #000" }}
            className={`inline-block p-1 sm:p-2 mx-1 sm:mx-3 sm:my-2 transition duration-500 w-[60px] h-[60px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 ${
              currentMain === "experience" ? "bg-yellow" : "bg-light"
            } border-dark hover:bg-yellow`}
            title="Career and experience"
          >
            <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
              <GiCrossedSwords size={48} />
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => updateMain("skills")}
            style={{ boxShadow: "0px 0px 8px #000" }}
            className={`inline-block p-1 sm:p-2 mx-1 sm:mx-3 sm:my-2 transition duration-500 w-[60px] h-[60px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 ${
              currentMain === "skills" ? "bg-yellow" : "bg-light"
            } border-dark hover:bg-yellow`}
            title="Skills And knowledge"
          >
            <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
              <GiSpellBook size={48} />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
