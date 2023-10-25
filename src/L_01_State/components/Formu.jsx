import React, { useState } from 'react'

export const Formu = ({ setUsers, setSearch}) => {
  const [inputText, setInputText] = useState('')
  // console.log(inputText)
  const handleClick = () => {
    const newUser = { id: Math.random().toString(36).substring(2), name: inputText}
    setUsers(users => [...users, newUser]);
    setInputText('');
    setSearch('');
  }

  const handleSearch = () => {
    setSearch(inputText);
    setInputText('');
  }

  const handleClean = () => {
    setSearch('')
  }

  return (
    <>
      <input
        className='form-control mt-4'
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        value={inputText}
        placeholder='Nuevo Usuario'
        />

      <button
        className='btn btn-primary'
        onClick={handleClick}
      >Aceptar
      </button>

      <button
        className='btn btn-primary m-4'
        onClick={handleSearch}
      >Buscar
      </button>

      <button
        className='btn btn-primary'
        onClick={handleClean}
      >Limpiar
      </button>
    </>
  )
}
