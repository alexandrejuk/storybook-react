import React from 'react'
import './style.css'
const Button = ({
  onClick,
  children,
  classStyle,
}) => (
  <button
    className={`${classStyle}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button