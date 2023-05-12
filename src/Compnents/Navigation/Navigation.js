import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div color='black'>
        <nav>
            <ul>
                <li><a className='action' href='#home'>Home</a></li>
                <li><a href='#news'>News</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
