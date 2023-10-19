import { ButtonBack } from '../components/ButtonBack'

InitialUsers = [
  { id: 1, name: "Mati <3"},
  { id: 2, name: "Fufufa"},
];

export const StateInitial = () => {
  const [users, setUsers] = useState(InitialUsers);


  return (
    <>
      <ButtonBack/>

      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>


    </>
  )
}
