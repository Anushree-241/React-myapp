//import logo from './logo.svg';
import React ,{Component}  from 'react';
//import Hello from './components/Hello';
import './App.css';
import MyButton from './components/MyButton';
//import './bootstrap.min.css';
//import { render } from 'react-dom';
 class App extends Component
{
   render(){
    return (<div className='App'>
      {/* <Hello/> */}
      <MyButton/>
    </div>);
   }
}

export default App;
