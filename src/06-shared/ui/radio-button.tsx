import clsx from 'clsx'
import { Label } from 'flowbite-react'
import { InputHTMLAttributes, PropsWithRef } from 'react'

interface UiRadioButtonProps {
    label: string
    id?: string
    legendName: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    checked?: boolean
    inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
    className?: string
    dataTestId?: string
}

export const UiRadioButton = ({
    label,
    id,
    legendName,
    disabled,
    checked,
    onChange,
    inputProps,
    className,
    dataTestId,
}: UiRadioButtonProps) => {
    return (
        <div className={clsx('flex items-center', className)}>
            <input
                {...inputProps}
                id={id}
                data-testid={dataTestId}
                type="radio"
                name={legendName}
                checked={checked}
                className="w-4 h-4 border-gray-300 text-black focus:ring-2 focus:ring-black dark:focus:ring-black dark:focus:bg-black dark:bg-gray-700 dark:border-gray-600"
                onChange={(event) => onChange(event)}
                disabled={disabled ?? false}
            />
            <Label
                htmlFor={id}
                className="block ms-2 text-lg text-gray-900 dark:text-gray-300 whitespace-nowrap"
                disabled={disabled ?? false}
            >
                {label}
            </Label>
        </div>
    )
}
