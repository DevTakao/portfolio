import React from "react";

const DisplayCard = () => {
  return (
    <div className="relative inline-block">
      {/* <span className="absolute -left-[25px] top-1/2 -translate-y-[50%] shadow-2xl">
        <svg width="40px" height="40px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.205 8.72805L12.205 3.72805C13.2041 3.10363 14.5 3.82189 14.5 5.00004V15C14.5 16.1782 13.2041 16.8965 12.205 16.272L4.205 11.272C3.265 10.6845 3.265 9.31555 4.205 8.72805Z"
            className="fill-light"
          />
        </svg>
      </span> */}

      <div className="w-full min-h-[96px] shadow-2xl bg-light"></div>
      <div className="p-8 my-2 text-2xl shadow-2xl bg-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint adipisci ullam, aliquid eveniet
        accusantium, iste reiciendis voluptate tempora autem natus asperiores ipsum distinctio suscipit recusandae
        molestiae quod error nihil.
      </div>
      <div className="w-full min-h-[96px] shadow-2xl bg-light"></div>
    </div>
  );
};

export default DisplayCard;
