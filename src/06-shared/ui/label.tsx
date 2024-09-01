import { Label } from 'flowbite-react'
import type { LabelProps } from 'flowbite-react'

export type UiLabelProps = LabelProps

export function UiLabel({ ...props }: UiLabelProps) {
    return <Label {...props} />
}
