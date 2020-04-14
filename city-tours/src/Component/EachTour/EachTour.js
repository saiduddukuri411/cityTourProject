import React,{Component} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./EachTour.scss";

class tour extends Component{
    state={
        showInfo:false,
    }

    handleInfo=()=>{
        this.setState({showInfo:!this.state.showInfo})
    }
  render(){
  const { id, city, img, name, info } = this.props.tour;
  const { removeTour } = this.props;
  return (
    <article className="tour">
      <div className="image-conatiner">
        <img src={img} alt="city pictures" />
        <span className="close-btn" onClick={()=>{removeTour(id)}}>
          <i className="fas fa-window-close" />
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>info  <span><i className="fas fa-caret-square-down" onClick={this.handleInfo}></i></span></h5>
        {this.state.showInfo ? <p>{info}</p>:null}
        
      </div>
    </article>
  );

  }
};

export default tour;
