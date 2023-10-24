
export const List = ({ users, handleDelete }) => {
  return (
    <ul className='mt-5'>
    {
      users.map(user =>
        <li key={ user.id } >
          {user.name}
          <button
            className="btn btn-dark bg-transparent bi bi-trash"
            onClick={() => handleDelete(user.id)}
          ></button>
          </li>
      )
    }
  </ul>
  )
}

