import clsx from 'clsx'
import { InputHTMLAttributes, PropsWithRef } from 'react'

interface UiRangeSliderProps {
    value: number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    min: number
    max: number
    step?: number
    disabled?: boolean
    inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
    className?: string
    dataTestId?: string
}

export const UiRangeSlider = ({
    value,
    onChange,
    min,
    max,
    step,
    disabled,
    inputProps,
    className,
    dataTestId,
}: UiRangeSliderProps) => {
    return (
        <div className={clsx('relative mb-2 w-full', className)}>
            <input
                {...inputProps}
                data-testid={dataTestId}
                type="range"
                value={value}
                onChange={onChange}
                step={step ?? 1}
                min={min}
                max={max}
                disabled={disabled ?? false}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span className="text-xs text-gray-500 dark:text-gray-400 absolute start-0 -bottom-4">
                {min}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 absolute end-0 -bottom-4">
                {max}
            </span>
        </div>
    )
}
