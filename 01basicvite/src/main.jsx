import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const Myreactelement=(
  <a href="https://google.com" target='_blank'>Visit</a>
)

const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target: '_blank'},
  'Click me'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
