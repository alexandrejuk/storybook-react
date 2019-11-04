import React from 'react'
import './style.css'
const Button = ({
  onClick,
  children,
}) => (
  <button
    className="btnDefault"
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button