import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 100);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(YOUTUBE_SEARCH_API + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-lg justify-between items-center fixed w-full bg-white ">
      <div className="flex col-span-1 ml-2 relative">
        <img
          onClick={toggleMenuHandler}
          alt="menu"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          className="h-6 cursor-pointer"
        ></img>
        <img
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          className="h-6 mx-2 cursor-pointer"
        ></img>
      </div>
      <div className="col-span-10 px-10 ml-44">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 px-5 border border-gray-400 p-2 rounded-l-full"
          ></input>
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        <div className="fixed bg-white py-2 px-2 w-[471px] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 hover:bg-gray-200">
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          className="h-8"
        ></img>
      </div>
    </div>
  );
};

export default Head;
