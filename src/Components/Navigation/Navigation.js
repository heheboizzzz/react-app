import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav class="navbar navbar-expand-lg " style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div class="container-fluid">
        <a class="navbar-brand" style={{color: theme.color}} href="#">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{color: theme.color}} aria-current="page" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color: theme.color}} aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{color: theme.color}} aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}