import clsx from 'clsx'
import { Button, ButtonProps } from 'flowbite-react'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { UiButton, UiButtonProps, UiButtonType } from './button'

interface UiBannerProps {
    title: string | ReactNode
    colorBg: string
    hiddenControl?: boolean
    buttonText?: string
    buttonProps?: UiButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
    testId?: string
}

export const UiBanner = ({
    title,
    colorBg,
    hiddenControl = false,
    buttonText,
    buttonProps,
    testId
}: UiBannerProps) => {
    return (
        <div
            data-testid={testId ?? "banner"}
            className="w-full h-fit flex justify-between items-center rounded px-4 py-2"
            style={{ backgroundColor: colorBg }}
        >
            <p>{title}</p>
            {!hiddenControl && buttonProps && (
                <UiButton
                    buttonType={UiButtonType.Secondary}
                    {...buttonProps}
                >{buttonText}</UiButton>
            )}
        </div>
    )
}
