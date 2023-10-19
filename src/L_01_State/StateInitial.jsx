import { useState } from 'react';
import { ButtonBack } from '../components/ButtonBack'
import { List } from './components/List';
import { Formu } from './components/Formu';

const InitialUsers = [
  { id: 1, name: "Brumar"},
  { id: 2, name: "Guille"},
  { id: 3, name: "Vazcol"}
];

export const StateInitial = () => {
  const [users, setUsers] = useState(InitialUsers);
  const [search, setSearch] = useState('');

  const usersFiltered = users.filter( user =>
    user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <ButtonBack />

      <Formu
        users={users}
        setUsers={setUsers}
        setSearch={setSearch}
      />


      <List users={usersFiltered}/>
    </>
  )
}
