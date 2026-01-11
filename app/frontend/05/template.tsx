'use client'

import {useState} from 'react'
import Link from 'next/link'
import React from 'react'

const Template = ({children: children}: {children: React.ReactNode}) => {
  const [name, setName] = useState('')

    return (
        <div className='border border-green-500 p-4 mt-4'>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className='m-4 border border-radi' />
            <br />
        </div>
    )
}

export default Template