import React from 'react';
import logo from '../assets/logo.svg';

export default function Header(props) {
  return (
    <header className="header">
      <h1><img src={logo} width="40" alt="logo" /> {props.ime}</h1>
      <p>{props.slogan}</p>
    </header>
  )
}
