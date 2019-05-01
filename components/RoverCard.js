import React from 'react'
import 'bulma'


const RoverCard = ({ name, state}) => {
  return (
    <div>
      <div className="card">
        <header className="card-header has-text-centered">
          <p className="card-header-title">
            {name}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>{state}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RoverCard
