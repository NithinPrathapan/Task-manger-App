import React from "react";
import { Button } from "./ui/button";

import { Menu, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
const Header = ({ open, setOpen, openCreate, setOpenCreate }) => {
  return (
    <header className="flex justify-between items-center px-4 py-3  ">
      <Button onClick={() => setOpen(true)} className="w-16 h-12 lg:hidden ">
        <Menu />
      </Button>
      <h1 className="font-Roboto uppercase text-2xl font-extrabold">
        Create your task list
      </h1>
      <Button
        onClick={() => {
          setOpenCreate(true);
        }}
        title="create a new task"
        className="flex items-center px-4 py-6"
      >
        <Plus />
      </Button>
      <Sheet open={openCreate} onOpenChange={setOpenCreate}>
        <SheetContent side="right" className="w-64">
          <div className="flex flex-col h-full mt-3">
            <SheetHeader className="border-b mt-3">
              <SheetTitle className="text-2xl font-extrabold  m-2">
                Todo
              </SheetTitle>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
