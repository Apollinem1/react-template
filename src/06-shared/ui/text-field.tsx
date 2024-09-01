import clsx from 'clsx'
import { InputHTMLAttributes, PropsWithRef, useId } from 'react'

export type UiTextFieldProps = {
    className?: string
    label?: string
    error?: string
    isRow?: boolean
    dataTestId?: string
    inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export function UiTextField({
    className,
    error,
    label,
    isRow = false,
    dataTestId,
    inputProps,
}: UiTextFieldProps) {
    const id = useId()
    return (
        <div className={clsx(className, 'flex flex-col gap-2 relative')}>
            <div
                className={clsx(
                    'flex justify-between',
                    isRow ? 'flex-row items-center gap-4' : 'flex-col gap-2'
                )}
            >
                {label && (
                    <label
                        htmlFor={id}
                        className={clsx(
                            'block',
                            isRow
                                ? 'whitespace-nowrap w-fit'
                                : 'whitespace-wrap w-full'
                        )}
                    >
                        {label}
                    </label>
                )}
                <input
                    {...inputProps}
                    data-testid={dataTestId}
                    id={id}
                    className={clsx(
                        inputProps?.className,
                        'p-0 pl-2',
                        error &&
                            'border-rose-400 active:border-rose-400 focus:border-rose-400'
                    )}
                    color={inputProps?.color ?? 'dark'}
                />
                {error && <div className="text-rose-400 text-sm absolute top-7 left-0">{error}</div>}
            </div>

            
        </div>
    )
}
