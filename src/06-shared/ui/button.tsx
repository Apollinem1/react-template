import { Button } from "flowbite-react";
import type { ButtonProps } from "flowbite-react";
import { ButtonHTMLAttributes } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";

export enum UiButtonSize {
  Large,
  Small,
}

export enum UiButtonType {
  Primary,
  Secondary,
  Accent,
  Risky,
}

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: UiButtonSize;
  customSize?: string;
  buttonType?: UiButtonType;
}

export function UiButton({
  size = UiButtonSize.Small,
  customSize,
  buttonType = UiButtonType.Secondary,
  className, // должно использовать только в крайнем случае
  ...props
}: UiButtonProps & ButtonProps) {
  let sizeStyle: string = "";

  // определяем размер
  if (customSize !== undefined) {
    sizeStyle = customSize;
  } else if (size == UiButtonSize.Large) {
    sizeStyle = "w-70 h-12";
  } else {
    sizeStyle = "w-40 h-8";
  }

  let color: string = "";
  if (buttonType == UiButtonType.Primary) {
    color = "primary";
  } else if (buttonType == UiButtonType.Secondary) {
    color = "secondary";
  } else if (buttonType == UiButtonType.Accent) {
    color = "focus";
  } else {
    color = "risky";
  }

  const buttonTheme: CustomFlowbiteTheme["button"] = {
    base: `group relative flex items-center justify-center p-0 ${sizeStyle} ${className} focus:outline-none`,
    color: {
      primary:
        "border border-transparent bg-primary-default text-white focus:bg-primary-active enabled:hover:bg-primary-hover",
      secondary:
        "border border-secondary-default-border bg-white text-black \
                focus:bg-secondary-active-bg focus:bg-opacity-30 focus:border-secondary-active-border focus:text-opacity-75 \
                enabled:hover:bg-white enabled:hover:border-secondary-hover-border enabled:hover:text-opacity-75",
      risky:
        "border border-transparent bg-risky-default text-white focus:bg-risky-active enabled:hover:bg-risky-hover",
      focus:
        "border border-focus-default-border bg-focus-default-bg text-focus-default-text \
                focus:bg-focus-active-bg focus:border-focus-active-border focus:bg-opacity-10 focus:text-opacity-75 \
                enabled:hover:bg-focus-hover-bg enabled:hover:border-focus-hover-border enabled:hover:text-focus-hover-text",
    },
    disabled:
      "cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-transparent",
    size: {
      default: "text-lg leading-6",
    },
    pill: {
      off: "rounded-lg",
    },
  };

  return (
    <Button
      theme={buttonTheme}
      color={color}
      size="default"
      {...props}
    ></Button>
  );
}
