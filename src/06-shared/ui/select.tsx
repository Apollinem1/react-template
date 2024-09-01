import { SelectHTMLAttributes } from 'react'
import { Select } from 'flowbite-react'
import type { SelectProps } from 'flowbite-react'

export type UiSelectProps = SelectProps &
    SelectHTMLAttributes<HTMLSelectElement>

export function UiSelect({ ...props }: UiSelectProps) {
    return <Select color={props.color ?? 'dark'} {...props}></Select>
}
