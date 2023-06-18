import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../constants/logo.png"

function Navbar() {
  return (
      <div className="container pt-3">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                  <Link to={'/'}>
                        <img src={logo} width={120} alt="" />
                  </Link>


                  <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <Link to={'/login'} class="me-3 py-2 text-dark text-decoration-none">
                              Login
                        </Link>
                        <Link to={'/register'} class="me-3 py-2 text-dark text-decoration-none">
                              Register
                        </Link>
                  </nav>
            </div>
    </div>
  )
}

export default Navbar
