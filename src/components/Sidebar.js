import React from "react";

const Sidebar = () => {
  return <div className="p-5 shadow-lg w-48">
    <h1 className="font-bold">Subscriptions</h1>
    <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
    </ul>
    <h1 className="font-bold pt-5">Watch Later</h1>
    <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>
    </ul>
  </div>;
};

export default Sidebar;
