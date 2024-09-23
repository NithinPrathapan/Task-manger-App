import Table from "@/components/Table";
import { pendingTask } from "@/config";
import React from "react";

const Pending = () => {
  return (
    <div className="flex flex-col ">
      <Table className="" tableData={pendingTask} />
    </div>
  );
};

export default Pending;
