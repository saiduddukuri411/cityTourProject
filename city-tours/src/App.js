import React ,{Component}from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Component/Navbar/Navbar'

class App extends Component {
  render=()=>{

    return(
      <React.Fragment>
      <Navbar />
      </React.Fragment>
    );
  }
  

  
}

export default App;
