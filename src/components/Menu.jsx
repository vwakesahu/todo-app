import React from "react";

const Menu = () => {
  return (
    <div className="h-screen w-[55%] ">
      <div className="h-[93%] bg-gray-100 border rounded-xl mr-4 p-4 ">
        <p className="font-semibold text-lg text-headingColor">Menu</p>

        {/* Search Field */}
        <div className="mt-6">
          <input
            type="text"
            className="w-full bg-transparent border px-3 py-2 rounded-lg focus-within:outline-none focus:border-gray-300"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
