import React from 'react'
import {useState} from 'react'
import './PlayersPresentation.css'


export default function PlayersPresentation({players}) {
  const [player, setPlayer] = useState([])
     console.log(players);
    return (
        <div className='container-fluid'>
        <div class= "row d-inline-flex">
        {players.map((player)=>(
        <div class ="col-12 col-sm-6 col-md-4 p-2 ">
        <div class="d-flex flex-column text-center border height100" key={player.id}>
        <img src={player.img} alt=''/>
          <h3>{player.name}</h3>
          <p className='title'>{player.club}</p>
          <button class='btn btn-block btn-dark' onClick={()=>{setPlayer(player)}}><a href='#popup1' id='openPopup'>Detail</a></button>
          </div>
        </div>
        ))}
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={player.img}/>
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {player.info}
            </div>
          </div>
        </div>
        </div>
    </div> 
  )
}
