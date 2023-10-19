
export const List = ({ users }) => {
  return (
    <ul className='mt-5'>
    {
      users.map(user =>
        <li key={ user.id } > {user.name} </li>
      )
    }
  </ul>
  )
}

