import React from "react";
import { Column, useTable } from "react-table";

export type CustomerItemProps = {
  id: string;
  name: string;
};

export type CustomerListProps = {
  customers: CustomerItemProps[];
};

export default function ({ customers }: CustomerListProps) {
  const data = React.useMemo(() => customers, []);
  const columns: Array<Column> = React.useMemo(
    () => [
      { header: "Id", accessor: "id" },
      { header: "Name", accessor: "name" },
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
              <th {...column.getHeaderProps()}>{column.render("header")}</th>
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
