import React, { useState } from 'react'

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'

import { useForm } from '../../shared/hooks/form-hook'

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators'

import './Auth.css'

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true)

  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  })

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      )
    }

    setIsLoginMode(prevMode => !prevMode)
  }

  const authSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs)
  }

  return (
    <Card className='authentication'>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element='input'
            id='name'
            type='text'
            label='Your Name'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter Name'
            onInput={inputHandler}
          />
        )}

        <Input
          element='input'
          id='email'
          type='email'
          label='E-Mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please Enter a Valid Email Address'
          onInput={inputHandler}
        />
        <Input
          element='input'
          id='password'
          type='password'
          label='Password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Please Enter a Valid password, at least 5 characters'
          onInput={inputHandler}
        />

        <Button type='submit' disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>

      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'LOGIN' : 'SIGNUP'}
      </Button>
    </Card>
  )
}

export default Auth
