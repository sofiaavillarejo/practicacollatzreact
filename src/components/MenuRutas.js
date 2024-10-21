import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href='/'>Collazt</a></li>
          <li><a href='/collazt/55'>Collazt numero 55</a></li>
          <li><a href='/collazt/33'>Collazt numero 33</a></li>
          <li><a href='/collazt/4'>Collazt numero 4</a></li>
        </ul>
      </div>
    )
  }
}
