import React from 'react'
import CardTickects from './CardTickects'

export default function Cardata() {
  return (
    <div>
        <nav>
            <div>
              <h2>Card data</h2>
              <p><small>Currently open card...</small></p>
            </div>
          </nav>

          <CardTickects />
    </div>
  )
}
