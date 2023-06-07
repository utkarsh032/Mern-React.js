import React from 'react'
import UsersList from '../components/UsersList'

const User = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'MAX ROBIL',
      image:
        'https://images.pexels.com/photos/17114615/pexels-photo-17114615/free-photo-of-wood-road-landscape-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      places: 3
    }
  ]
  return <UsersList items={USERS} />
}

export default User
