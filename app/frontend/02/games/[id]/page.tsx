import React from 'react'

const Game = async ({ params }: {params: Promise<{id: string}>}) => {
    console.log("params =", await params)

    const { id } = await params;

    return (
        <div>Game - {id}</div>
    )
}

export default Game