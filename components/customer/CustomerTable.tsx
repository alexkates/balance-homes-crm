import { Customer } from ".prisma/client";
import Link from "next/link";
import React from "react";
import { Column, useTable } from "react-table";

export default function ({ customers }: { customers: Customer[] }) {
  const data = React.useMemo(() => customers, []);
  const columns: Array<Column> = React.useMemo(
    () => [
      {
        header: "Id",
        accessor: "id",
        Cell: ({ value }) => (
          <Link href={`/customer/${value}`}>
            <a className="hover:underline text-blue-700 hover:text-blue-500">
              {value}
            </a>
          </Link>
        ),
      },
      { header: "First Name", accessor: "firstname" },
      { header: "Last Name", accessor: "lastname" },
      { header: "Address", accessor: "address" },
      { header: "Email", accessor: "email" },
      { header: "Phone", accessor: "phone" },
      { header: "City", accessor: "city" },
      { header: "State", accessor: "state" },
      { header: "Zip", accessor: "zip" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="px-4 py-2" {...column.getHeaderProps()}>
                {column.render("header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="border px-4 py-2" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
