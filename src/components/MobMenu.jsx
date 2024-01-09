import React from "react";
import { Button } from "@/components/ui/button";

const MobMenu = () => {
  return (
    <div className="absolute right-3 top-16 border bg-secondary rounded-lg">
      <ul>
        <li className="">
          <Button className="text-white">Add todo</Button>
        </li>
      </ul>
    </div>
  );
};

export default MobMenu;
