import React ,{Component}from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Component/Navbar/Navbar'
import Tourlist from './Component/ToutList/ToutList'

class App extends Component {
  render=()=>{

    return(
      <React.Fragment>
      <Navbar />
      <Tourlist />
      </React.Fragment>
    );
  }
  

  
}

export default App;
