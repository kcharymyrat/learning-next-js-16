import React from 'react'

const Users = async () => {

    await new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })

    return (
        <div>Users</div>
    )
}

export default Users