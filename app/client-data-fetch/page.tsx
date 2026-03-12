"use client";

import React from 'react'
import { useEffect, useState } from "react"

interface User {
    id: number
    name: string
}


const TodoComponent = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=> {
       const fetchUsers = async  () => {
            try {
                setError(null)
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setUsers(data)
            } catch (err: any) {
                console.log(err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        };
        fetchUsers()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

  return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoComponent