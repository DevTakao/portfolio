import { IoPersonOutline } from "react-icons/io5";
import { GiCrossedSwords, GiSpellBook } from "react-icons/gi";

const MainNav = () => {
  return (
    <div className="z-50 inline-block text-left">
      <ul className="flex flex-col sm:flex-row lg:flex-col">
        <li>
          <button
            style={{ boxShadow: "0px 0px 8px #000" }}
            className="inline-block p-2 mx-3 my-2 transition duration-500 w-[75px] h-[75px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 bg-light border-dark hover:bg-yellow"
          >
            <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
              <IoPersonOutline size={48} />
            </span>
          </button>
        </li>
        <li>
          <button
            style={{ boxShadow: "0px 0px 8px #000" }}
            className="inline-block p-2 mx-3 my-2 transition duration-500 w-[75px] h-[75px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 bg-light border-dark hover:bg-yellow"
          >
            <span className="inline-flex items-center justify-center w-full h-full p-2 border-8 rounded-full border-dark">
              <GiCrossedSwords size={48} />
            </span>
          </button>
        </li>
        <li>
          <button
            style={{ boxShadow: "0px 0px 8px #000" }}
            className="inline-block p-2 mx-3 my-2 transition duration-500 w-[75px] h-[75px] md:w-[10vw] md:h-[10vw] border rounded-full lg:mx-0 bg-light border-dark hover:bg-yellow"
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
