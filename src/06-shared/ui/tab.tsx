import { Tabs, TabsProps } from "flowbite-react";

export const UiTabs = ({ children, ...props }: TabsProps) => {
  return <Tabs {...props}>{children}</Tabs>;
};
