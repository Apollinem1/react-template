import { Table, TableProps } from "flowbite-react";

export const UiTable = ({ children, ...props }: TableProps) => {
  return <Table {...props}>{children}</Table>;
};
