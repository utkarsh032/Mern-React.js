import React from 'react'
import UsersList from '../components/UsersList'

const User = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'MAX ROBIL',
      image:
        'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
      places: 3
    }
  ]
  return <UsersList items={USERS} />
}

export default User
