import React, { useState } from 'react'

export const Formu = ({setUsers}) => {
  const [textInput, setTextInput] = useState('');

  const handleClick = () => {
    const newUser = { id: Math.random().toString(36).substring(2), name: textInput}
    setUsers(users => [...users, newUser]);
    setTextInput('');
  }
  return (
    <>
      <input
        className='form-control'
        onChange={(e) => setTextInput(e.target.value)}
        type="text"
        value={textInput}
        placeholder='Nuevo Usuario'
        />

      <button
        className='btn btn-primary my-3'
        onClick={handleClick}
      >Aceptar
      </button>
    </>
  )
}
