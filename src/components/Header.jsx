import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-slate-900 p-4 flex justify-between items-center">
        <Link href={"/"} className="text-white">
          NE<span className="text-2xl text-red-700">X</span>T CRUD
        </Link>
        <Link href={"/addTopic"} className="bg-white p-2">
          Add topic
        </Link>
      </nav>
    </div>
  );
};

export default Header;
