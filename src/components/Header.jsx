import React, { useState } from "react";
import { Button } from "./ui/button";

import { Menu, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import CommonForm from "./common/Form";
import { todoFormControl } from "@/config";

const initialFormData = {
  title: "",
  description: "",
};

const Header = ({ open, setOpen, openCreate, setOpenCreate }) => {
  const [formData, setFormData] = useState(initialFormData);
  function onSubmit() {}
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
        <SheetContent side="right" className="w-[50%]">
          <div className="flex flex-col h-full mt-3">
            <SheetHeader className="border-b mt-3 mb-12">
              <SheetTitle className="text-2xl font-extrabold  m-2">
                Todo
              </SheetTitle>
            </SheetHeader>
            <CommonForm
              formData={formData}
              setFormData={setFormData}
              buttonText="Add"
              onSubmit={onSubmit}
              formControls={todoFormControl}
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
