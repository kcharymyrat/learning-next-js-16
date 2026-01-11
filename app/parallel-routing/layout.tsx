import React from 'react'

type Nodes = Readonly<{
  children: React.ReactNode,
  comments: React.ReactNode,
  members: React.ReactNode
}>

const Layout = ({children, comments, members}: Nodes) => {
  return (
    <div>
        <h1>{children}</h1>
        <div className="flex">
            <div>{members}</div>
            <div>{comments}</div>
        </div>
    </div>
  )
}

export default Layout