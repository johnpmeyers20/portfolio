import React from 'react'
import { Link } from 'react-router-dom'

export default function Headshot() {
  return (
    <div>
      <h2>Headshot</h2>
      <Link><img src="https://i.imgur.com/fNV1sVc.png" alt="Portrait" width="375" height="auto"/></Link>
    </div>
  )
}
