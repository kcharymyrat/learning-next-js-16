
interface User {
    id: number
    name: string
}

const UsersComponent = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const data: User[] = await response.json()
    console.log(data)


  return (
    <div>
        <h1>Users</h1>
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UsersComponent