import React from 'react'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famour sky Scraper in the world!',
    imageUrl:
      'https://cdn.getyourguide.com/img/location/5ca347fb624aa.jpeg/99.webp',
    address: '20 W 34th St., New York, NY 10001, United States',
    location: {
      lat: 40.7484404,
      lng: 73.9905353
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famour sky Scraper in the world!',
    imageUrl:
      'https://lh3.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=s1360-w1360-h1020',
    address: '20 W 34th St., New York, NY 10001, United States',
    location: {
      lat: 40.7484404,
      lng: 73.9905353
    },
    creator: 'u2'
  },

  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'One of the most famour sky Scraper in the world!',
    imageUrl: 'https://cdn.getyourguide.com/img/tour/64288fe87a85d.jpeg/98.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    location: {
      lat: 40.7484404,
      lng: 73.9905353
    },
    creator: 'u3'
  }
]

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />
}

export default UserPlaces
