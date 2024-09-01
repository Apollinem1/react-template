import { InputHTMLAttributes } from "react";
import { TextInput } from "flowbite-react";
import type { TextInputProps } from "flowbite-react";

export type UiInputProps = TextInputProps &
  InputHTMLAttributes<HTMLInputElement>;

export function UiInput({ ...props }: UiInputProps) {
  return <TextInput color={props.color ?? "dark"} {...props} />;
}
