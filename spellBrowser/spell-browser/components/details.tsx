'use client';

import { useState } from "react";

type Props = {
    spell: string;
}

export default function details({spell}: Props) {

    return <h1>{spell} test</h1>;
}