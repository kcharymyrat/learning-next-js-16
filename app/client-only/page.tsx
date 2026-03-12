"use client";

import { add, substract } from '@/utils/client-only-component'

const ClientOnly = () => {
    let a = 10;
    let b = 5;

    console.log("a + b =", add(a, b))
    console.log("a - b =", substract(a, b))

    return (
        <div>ClientOnly</div>
    )
}

export default ClientOnly