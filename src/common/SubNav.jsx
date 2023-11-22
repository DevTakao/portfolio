import React from "react";

const SubNav = () => {
  return (
    <div>
      <div className="w-full min-h-[64px] shadow-2xl bg-light relative z-10"></div>

      <ul className="relative theme-scroll max-h-[400px] z-0 my-2 overflow-y-auto text-2xl shadow-2xl flex flex-col gap-y-2">
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 1</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 2</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 3</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 4</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 5</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 6</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 7</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 8</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 9</li>
        <li className="block px-10 py-3 shadow-2xl cursor-pointer bg-lightsoft hover:bg-yellow">Menu Button 10</li>
      </ul>

      <div className="w-full min-h-[64px] shadow-2xl bg-light relative z-10"></div>
    </div>
  );
};

export default SubNav;
