import React, { Suspense } from 'react'
import CardTickects from './CardTickects'
import Loading from './loading'
import Link from 'next/link'

export default function Cardata() {
  return (
    <div>
        <nav>
            <div>
              <h2>Card data</h2>
              <p><small>Currently open card...</small></p>
            </div>
            <Link href="/cardata/create" className="ml-auto">
              <button className='bg-green-700 text-white'>Add Card</button>
            </Link>
          </nav>

         <Suspense fallback={<Loading />}>
            <CardTickects />
          </Suspense>
    </div>
  )
}
