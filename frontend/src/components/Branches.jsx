import React from "react";
import { branches } from "./Arr";

function Branches() {
  
  return (
    <div className="bg-black w-full text-white font-bold text-xl p-4 flex justify-start items-start flex-wrap gap-x-20 gap-y-5 my-5 mx-auto rounded">
      {branches.map((branch, idx) => (
        <div
          key={idx}
          className="flex justify-between  gap-x-5 pb-2 sm:pb-0"
        >
          <span className="font-bold">{branch.name} - </span>
          <span>
            <span className="font-bold">Phone :</span> {branch.phone}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Branches;
