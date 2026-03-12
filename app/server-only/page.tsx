import { add, substract } from '@/utils/server-only-component'

const ServerOnly = () => {
    let a = 10;
    let b = 5;

    console.log("a + b =", add(a, b))
    console.log("a - b =", substract(a, b))

  return (
    <div>Server Component</div>
  )
}

export default ServerOnly