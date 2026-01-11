'use client'

import {useState} from 'react'
import Link from 'next/link'

const Layout = ({children: customNameForChildren}: {children: React.ReactNode}) => {
    const [name, setName] = useState('')

    return (
        <div className='border border-blue-500 p-4 mt-4'>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className='m-4 border border-radi' />
            <br />

            <Link href="/05/revenue">Revenue</Link>
            <br />
            <Link href="/05/stats">Stats</Link>

            <br />
            {customNameForChildren}
        </div>
    )
}


export default Layout