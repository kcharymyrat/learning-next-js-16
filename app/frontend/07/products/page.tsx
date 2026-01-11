
const SomeError = () => {
    let x = 0
    if (x < 1) {
        throw new Error('SomeError')
    }

    return (
        <div>SomeError - {10 / x}</div>
    )
}

export default SomeError