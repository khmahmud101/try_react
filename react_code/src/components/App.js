

import './App.css';


import React, { Component } from 'react';
//import PostForm from './forms/PostForm'
import PostForma from './formsa/PostForma'


class App extends Component {



  render() {
   return (
     
      <div className="App">
         <h1>Hello world</h1>
          <div className="container">
        
                <div className="row">
                      <div className="col-sm-8 offset-sm-2">
                          <PostForma/>
                          
                      </div>
                </div>
          </div>
       </div>
   );
  }
}
export default App


