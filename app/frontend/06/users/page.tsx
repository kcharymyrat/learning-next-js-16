import React from 'react'
import { redirect } from 'next/navigation'

const Users = () => {
    redirect("/06/about/")
    
    return (
        <div>Users</div>
    )
}


export default Users