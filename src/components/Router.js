import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ConjeturaCollazt from './ConjeturaCollazt';
import Home from './Home';
import Collazt from './ConjeturaCollazt';

export default class  extends Component {
  render() {
    function ConjeturaCollaztElement(){
      var { minumero } = useParams();
      return <Collazt numero ={minumero}/>
    }
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/collazt/:minumero' element={<ConjeturaCollaztElement/>}></Route>
          </Routes>
        </BrowserRouter>
    )
  }
}
