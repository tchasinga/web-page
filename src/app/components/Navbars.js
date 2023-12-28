import Link from 'next/link'


export default function Navbars() {
  return (
    <nav>
   
      <h1>Get info</h1>
      <Link href="/">Dashboard</Link>
       <Link href="/cardata">Car Data</Link>
    </nav>
  )
}