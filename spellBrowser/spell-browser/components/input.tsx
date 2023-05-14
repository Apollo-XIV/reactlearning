'use client';

import { Dispatch, EventHandler, SetStateAction, useState } from "react";

type Props = {
    spell: string;
    onChange: any;
}

export default function input({spell, onChange}: Props) {
    return <input type="text" onChange={onChange}/>
}