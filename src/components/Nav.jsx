import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
     <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Pricing</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">Action</Link></li>
            <li><Link class="dropdown-item" href="#">Another action</Link></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
