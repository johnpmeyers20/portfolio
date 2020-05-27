import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>JP Meyers</h1>
      <Link>About</Link>
      <Link>Portfolio</Link>
      <Link>Contact</Link>
    </div>
  )
}
