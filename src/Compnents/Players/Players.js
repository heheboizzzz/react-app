import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <div className='container'>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/cr.jpg'/>
                <h3>Cristiano Ronaldo</h3>
                <p className='tiltle'>Manchester United</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/kante.jpg'/>
                <h3>Kante</h3>
                <p className='tiltle'>Chelsea</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/messi.jpg'/>
                <h3>Messi</h3>
                <p className='tiltle'>PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/neymar.jpg'/>
                <h3>Neymar</h3>
                <p className='tiltle'>PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/kane.jpg'/>
                <h3>Kane</h3>
                <p className='tiltle'>Tottemham</p>
                <p><button>Detail</button></p>
            </div>
        </div>
        <div className='column'>
            <div className='card'>
                <img src='assets/images/haaland.jpg'/>
                <h3>Haaland</h3>
                <p className='tiltle'>Manchester City</p>
                <p><button>Detail</button></p>
            </div>
        </div>
      </div>
    )
  }
}
