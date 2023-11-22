import { IoPersonOutline } from "react-icons/io5";
import { GiCrossedSwords, GiSpellBook } from "react-icons/gi";

const Navigation = () => {
  return (
    <div className="z-50 inline-block text-left">
      <ul className="flex flex-col">
        <li>
          <button
            style={{ boxShadow: "0px 0px 8px #000" }}
            className="inline-block p-2 my-2 border rounded-full bg-light border-dark hover:bg-yellow"
          >
            <span className="inline-flex items-center justify-center w-24 h-24 p-2 border-8 rounded-full border-dark">
              <IoPersonOutline size={48} />
            </span>
          </button>
        </li>
        <li>
          <button
            style={{ boxShadow: "0px 0px 8px #000" }}
            className="inline-block p-2 my-2 border rounded-full bg-light border-dark hover:bg-yellow"
          >
            <span className="inline-flex items-center justify-center w-24 h-24 p-2 border-8 rounded-full border-dark">
              <GiCrossedSwords size={48} />
            </span>
          </button>
        </li>
        <li>
          <button
            style={{ boxShadow: "0px 0px 8px #000" }}
            className="inline-block p-2 my-2 border rounded-full bg-light border-dark hover:bg-yellow"
          >
            <span className="inline-flex items-center justify-center w-24 h-24 p-2 border-8 rounded-full border-dark">
              <GiSpellBook size={48} />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
