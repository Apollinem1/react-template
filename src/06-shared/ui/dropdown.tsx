import { Dropdown } from "flowbite-react"
import type { DropdownProps } from "flowbite-react"

export function UiDropdown ({...props}: DropdownProps) {
  return <Dropdown color={props.color ?? 'dark'} size={props.size ?? 'sm'} {...props}></Dropdown>
};

export const UiDropdownItem = Dropdown.Item
export const UiDropdownDivider = Dropdown.Divider
