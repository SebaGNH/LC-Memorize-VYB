import React from 'react'
import { NavLink } from 'react-router-dom'

export const Ln01_State = () => {
  return (
    <>
      <h2 className='text-info'>StateInitial</h2>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">

              <NavLink to="/StateInitial" className="nav-link btn btn-outline-primary m-1">
              StateInitial
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
