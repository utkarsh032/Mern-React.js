import React from 'react'
import './NewPlace.css'

import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'

const NewPlace = () => {
  return (
    <form className='place-form'>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter a valid title'
      />
    </form>
  )
}

export default NewPlace
