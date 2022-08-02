import React from 'react'
import { useEffect, useState } from 'react'

function RandomUser() {
    const [user, setUser] = useState([]);
    const [id, setId] = useState(Math.floor(Math.random() * 10) + 1);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => setUser({
            name: user.name,
            website: user.website,
            email: user.email,
            phone: user.phone
        }))
    }, [id])
    console.log(user)
    return (
        <>
        <button onClick={() => setId(Math.floor(Math.random() * 10) + 1)}>Reset</button>
        <h2>User Data</h2>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Website:</b> {user.website}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        </>
    )
}

export default RandomUser