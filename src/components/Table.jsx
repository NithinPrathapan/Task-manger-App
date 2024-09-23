import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { X } from "lucide-react";

// Table headings
const TABLE_HEAD = ["Status", "Title", "Description", "Remove"];

const Table = ({ tableData }) => {
  return (
    <Card className="h-full w-[80%] mx-auto ">
      <table className=" table-auto text-left">
        {/* Table Header */}
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b text-center border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        {/* Table Body */}
        {tableData.map((data) => (
          <tbody key={data.id}>
            <tr key={data.id}>
              <td className=" text-center border-b border-blue-gray-50">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-center border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center"
                >
                  {data.title}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-center"
                >
                  {data.description}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="black"
                  className="font-medium flex justify-center items-center cursor-pointer"
                >
                  <X />
                </Typography>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Card>
  );
};

export default Table;
