import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  console.log("hello");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <Header setOpen={setOpenSidebar} openCreate={openCreate} setOpenCreate={setOpenCreate} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
