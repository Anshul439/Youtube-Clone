import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "JabaScript", "News", "Comedy", "History"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
