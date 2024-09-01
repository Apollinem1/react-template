import { Checkbox, Label } from 'flowbite-react'
import type { CheckboxProps, LabelProps } from 'flowbite-react'
import { InputHTMLAttributes } from 'react'

interface ExtendedCheckboxAttributes extends InputHTMLAttributes<HTMLInputElement> {
    "data-testid"?: string;
}

type UiCheckboxProps = {
    checkbox: CheckboxProps & ExtendedCheckboxAttributes
    label: LabelProps
}

export function UiCheckbox({ checkbox, label }: UiCheckboxProps) {
    return (
        <div className='flex items-center gap-x-2'>
            <Checkbox color={checkbox.color ?? 'dark'} {...checkbox} />
            <Label {...label}></Label>
        </div>
    )
}
