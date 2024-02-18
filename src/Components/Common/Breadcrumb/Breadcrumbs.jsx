import React from "react";
import { useLocation } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ActiveModalToggle } from "../../../../Store/Slices/App";

const Breadcrumbs = () => {
  
  const location = useLocation();
  
  const paths = location.pathname.split("/").filter((item) => item !== "");

  const dispatch = useDispatch()
  
  return (
    <div className="py-4 px-4 bg-gray-200/10 border-b-[1px] border-black/5 flex items-center justify-between gap-2">
     
     <div className="flex item-center gap-2">
     <span className="text-gray-400 capitalize font-medium text-[10px] flex items-center gap-1">
        <p>Home</p>
        {paths.length > 0 && <CaretRight size={12} />}
      </span>
      {paths.map((item, idx) => {
        return (
          <span
            className={`text-gray-400 capitalize font-medium text-[10px] flex items-center gap-1 ${
              paths[paths.length - 1] === item ? "text-gray-700" : ""
            }`}
          >
            <p>{item}</p>
            {paths[paths.length - 1] !== item && <CaretRight size={12} />}
          </span>
        );
      })}
     </div>

     {/* add breadcrub buttons right side */}
     <div className="flex">
      {location.pathname === '/cuisine' && <button onClick={()=>{dispatch(ActiveModalToggle('createcategories'))}} type="button" className="focus:outline-none text-white bg-black/70 hover:bg-black/80 focus:ring-4 focus:ring-black/30 font-medium rounded-lg text-xs px-4 py-2 focus:animate-keep-bounce">Create Cuisine</button>}
      {location.pathname === '/food' && <button onClick={()=>{dispatch(ActiveModalToggle('createfood'))}} type="button" className="focus:outline-none text-white bg-black/70 hover:bg-black/80 focus:ring-4 focus:ring-black/30 font-medium rounded-lg text-xs px-4 py-2 focus:animate-keep-bounce">Create Foods</button>}
     </div>
     
    </div>
  );
};

export default Breadcrumbs;
