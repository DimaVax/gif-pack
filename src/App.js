import './App.css';
import { Component } from 'react';
import { GifSearch } from './Components/GifSearch/GifSearch';

export class App extends Component {
  render(){
    return(
      <div className="App">
        <GifSearch />
      </div>
    )
  }
}



