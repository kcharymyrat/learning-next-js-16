"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()

  console.log("router =", router)

  const navigate = (page: string) => {
    router.push(page)
  }

  return (
    <div>
      <button onClick={() => navigate("login")}>Login</button>
      <h1>01</h1>
      <Link href="/01/abc">Abc</Link>
    </div>
  )
}

export default Home