import clsx from "clsx";
import { ReactNode } from "react";

/**
 * UiContainer
 * Контейнер с бордером для обозначения границ на странице
 * @param {ReactNode} children - дочерние элементы
 * @param {string} className - строка с классами
 */

export const UiContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        `flex items-center justify-center border-2 border-theme rounded drop-shadow-default bg-white p-4`,
        className
      )}
    >
      {children}
    </div>
  );
};
