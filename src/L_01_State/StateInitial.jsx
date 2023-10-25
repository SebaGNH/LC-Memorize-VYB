import { useMemo, useState, useCallback, useEffect } from 'react';
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

  // const usersFiltered = users.filter( user => {
  //   console.log("App Filter");
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  //   }
  // );

  // el arreglo de dependiencias [] diría a quien va a escuchar para volver a ejecutarse, que no lo haga automáticamente,solo cuando cambia el valor
  // en este caso cuando se ejecuta el search o cuando encuentra un nuevo usuario
  const usersFiltered = useMemo( () => users.filter( user => {
      console.log("App Filter StateInitial 25"); // así evitamos este renderizado
      return user.name.toLowerCase().includes(search.toLowerCase())
      }
    ),[users, search]);

    // const handleDelete = (idDeleted)=> {
    //   setUsers(users => users.filter( user => user.id !== idDeleted))
    // }

    const handleDelete = useCallback(  (idDeleted)=> {
      setUsers(users => users.filter( user => user.id !== idDeleted))
    } ,[users]  )


    // otro Ej
    const printUsers = useCallback(( () =>
      console.log('Change Users', users)
    ),[users])

    useEffect(() => {
      printUsers();
    }, [users, printUsers]);


  return (
    <>
      <ButtonBack />

      <Formu
        setUsers={setUsers}
        setSearch={setSearch}
      />


      <List users={usersFiltered} handleDelete={handleDelete}/>
    </>
  )
}
