
import React, { useState } from 'react'
import request from 'superagent'
const { url } = require('../../constants')

export default function SignUp() {
  const [state, setState] = useState({
    name: '', password: ''
  });

  const signUp = (name, password) => {
    request
      .post(`${url}/user`)
      .send({ name, password })
      .then(res => {
        setState({ name: '', password: ''})
      })
      .catch(console.error)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    signUp(state.name, state.password)
    
  }

  const onChange = (event) => {
  const value = event.target.value
  if (event.target.name === 'name') {
    console.log('event,', event)
    setState(state => ({
      ...state, name: value
    }))
  } else {
    
    setState(state => ({
      ...state, password: value
    }))
  }
    
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={state.name}
              name='name'
              placeholder='enter your name'
              onChange={onChange}
            />
          </label>
          <label>
            password:
            <input
              type='password'
              value={state.password}
              name='password'
              placeholder='enter password'
              onChange={onChange}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
    </div>
  );
}
