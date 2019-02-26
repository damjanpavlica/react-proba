import React from 'react';

export default function Footer(props) {
  return (
    <footer className="footer">
      {props.ime} Preduzeće osnovano {props.osnovano}.
    </footer>
  )
}