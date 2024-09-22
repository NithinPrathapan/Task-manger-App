import React from "react";
import { Button } from "./ui/button";

import { Menu } from "lucide-react";
const Header = ({ open, setOpen }) => {
  return (
    <header className="flex justify-between items-center px-4 py-3  ">
      <Button onClick={() => setOpen(!open)} className="w-16 h-12 lg:hidden ">
        <Menu />
      </Button>
      <h1 className="font-Roboto uppercase text-2xl font-extrabold">
        Create your task list
      </h1>
      <Button className="w-24 h-12">Helo</Button>
    </header>
  );
};
export default Header;
