import { Datepicker, DatepickerProps } from "flowbite-react";

export const UiDatePicker = ({ children, ...props }: DatepickerProps) => {
  return <Datepicker {...props}>{children}</Datepicker>;
};
