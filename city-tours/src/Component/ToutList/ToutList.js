import React,{Component} from 'react';
import Tour from '../EachTour/EachTour';
import './TourList.scss'
import {tourData} from '../../tourData';


class Tourlist extends Component{
  state={
    tours:tourData,
  }

  removeTour=id=>{
     const {tours}=this.state
     const sortedTours=tours.filter(tour=>tour.id!==id)
     this.setState({tours:sortedTours})
  }
  render(){

    const tour=[...this.state.tours].map((eachTour)=>{
       return(<Tour key={eachTour.id} tour={eachTour} removeTour={this.removeTour}> </Tour>)
    })

    return(
        <section className="tour-list">
            {tour}
          
        </section>
    );
  }

};

export default Tourlist;

