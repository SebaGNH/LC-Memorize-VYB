import React, { useState } from 'react'

export const Formu = ({users, setUsers, setSearch}) => {
  const [inputText, setInputText] = useState('')
  console.log(inputText)
  const handleClick = () => {
    const newUser = { id: Math.random().toString(36).substring(2), name: inputText}
    setUsers(users => [...users, newUser]);
    setInputText('');
  }

  const handleSearch = () => {
    setSearch(inputText);
  }
  return (
    <>
      <input
        className='form-control'
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        value={inputText}
        placeholder='Nuevo Usuario'
        />

      <button
        className='btn btn-primary my-3'
        onClick={handleClick}
      >Aceptar
      </button>

      <button
        className='btn btn-primary m-3'
        onClick={handleSearch}
      >Buscar
      </button>
    </>
  )
}
