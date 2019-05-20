import React from 'react'

import './Header.css'

export default function Header(props) {
  return <h1 className="Header">{props.content}</h1> ;
}