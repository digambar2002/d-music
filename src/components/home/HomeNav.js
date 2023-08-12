import React from 'react'

export default function HomeNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transperant">

          <div className="d-flex justify-content-between navBox">
            <h4>Discover</h4>
            <div className=''>
              <i className="bi bi-three-dots me-4 text-light-purple"></i>
              <i className="bi bi-bell me-4 text-light-purple"></i>
              <img src='https://github.com/mdo.png' alt="" width="44" height="44" className="rounded-circle me-2" />
            </div>
          </div>


      </nav>
    </div>
  )
}
