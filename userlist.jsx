// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="user-list">
            {users.map(user => (
                <UserProfile key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
