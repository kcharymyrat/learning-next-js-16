import React from 'react'
import Link from 'next/link'

const AppLayout = ({children, title } : Readonly<{children: React.ReactNode, title: string}>) => {
  return (
    <main>
        <nav>
            <ul className='flex flex-row gap-4'>
                <li><Link href="/04/">Home</Link></li>
                <li><Link href="/04/about">About</Link></li>
            </ul>
        </nav>

        <p>Title: {title} - {typeof title}</p>

        {children}

        <footer><h3>Footer</h3></footer>

    </main>
  )
}

export default AppLayout