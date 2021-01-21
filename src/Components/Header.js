import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <h1>JP Meyers</h1>
      <div className='header-links'>
        <Link>About</Link>
        <Link>Portfolio</Link>
        <Link>Contact</Link>
      </div>
    </>
  )
}
