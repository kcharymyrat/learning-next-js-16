type GameProps = {
    params: Promise<{id: number}>
}

export const generateMetadata = async ({ params }: GameProps) => {
    const {id} = await params
    return {
        title: `Game ${id}`,
        description: `Description of Game ${id}`
    }
}

const Game = async ({ params }: GameProps) => {
    // const p = await params
    // const { id } = p

    const {id} = await params

  return (
    <div>Game #{id}</div>
  )
}

export default Game