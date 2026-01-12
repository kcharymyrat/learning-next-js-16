import React from "react"

type Node = Readonly<{
    children: React.ReactNode,
    login: React.ReactNode
}>

const Layout = () => {
  return (
    <div>Layout</div>
  )
}

export default Layout