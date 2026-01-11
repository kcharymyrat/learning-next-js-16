import React from 'react'

type Nodes = Readonly<{
    children: React.ReactNode,
    sidebar: React.ReactNode,
    songs: React.ReactNode
}>

const Layout = ({children, sidebar, songs}: Nodes) => {
  return (
    <div>
        <div>{children}</div>
        <div className="flex">
          <div>{sidebar}</div>
          <div>{songs}</div>
        </div>
    </div>
  )
}

export default Layout