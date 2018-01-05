import React,{Component} from 'react';
import { render } from 'react-dom';
import Hello from './Components/Hello';
import Skills from './Components/Skills';
import style from "./index.scss";



class App extends Component{
render(){
  return(
    <div>

      <Hello name="Skill BoX" />
      <Skills/>
    </div>
  )
}
 
}


render(<App />, document.getElementById('root'));
