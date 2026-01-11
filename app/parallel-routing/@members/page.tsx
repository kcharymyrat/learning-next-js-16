import Link from "next/link"


const Members = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("Content is currently loading...")
    }, 3000)
  })

  return (
    <div className="border m-2 p-[10rem] w-[30rem]">
      <h1>Members</h1>
      <Link href="/parallel-routing/likes">Likes</Link>
    </div>
  )
}

export default Members