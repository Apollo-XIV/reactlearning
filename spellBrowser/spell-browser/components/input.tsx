'use client';

import { MutableRefObject, forwardRef } from "react";

type Props = {
    label: string;
}

export type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, Props>(function input({label}, ref) {
    return <>
        <label htmlFor="tss">{label}:</label>
        <input ref={ref} type="text" name="tss" id="tss"/>
    </>
})