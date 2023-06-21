import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import './PlaceForm.css'

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators'

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

const UpdatePlace = () => {
  const placeId = useParams().placeId

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <h2>Could not find Place!</h2>
      </div>
    )
  }

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter valid title'
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />

      <Input
        id='description'
        element='textarea'
        label='Descrition'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter valid desccription (min. 5 characters).'
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />

      <Button type='submit' disabled={false}>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
