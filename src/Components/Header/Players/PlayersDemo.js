import React, { Component } from 'react'
import { Players } from '../../shared/ListOfPlayers'
import './Players.css'

export default function PlayersDemo() {
    return (
        <div className='container-fluid'>
        <div class= "row d-inline-flex">
        {Players.map((player)=>(
        // <div className='column'>
        // <div className='card'>
  
        <div class ="col-12 col-sm-6 col-md-4 p-2 ">
        <div class="d-flex flex-column text-center border height100" key={player.id}>
        <img src={player.img} alt=''/>
          <h3>{player.name}</h3>
          <p className='title'>{player.club}</p>
          <button class='btn btn-block btn-dark'>Detail</button>
          </div>
        </div>
        ))}
        </div>
        
    </div>

    )
  }
