import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News", "Valntines"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
