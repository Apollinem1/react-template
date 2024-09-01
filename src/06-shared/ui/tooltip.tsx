import { Tooltip } from "flowbite-react";
import type { TooltipProps } from "flowbite-react";

export function UiTooltip({ ...props }: TooltipProps) {
  return <Tooltip style={props.style ?? "dark"} {...props}></Tooltip>;
}
