import React,{Component} from 'react';
import {fetchTaxiLocation} from '../actions/index';
import {fetchDirecions} from '../actions/index';
import {connect} from 'react-redux';

class SelectBar extends Component{
  constructor(props){
    super(props);
    // console.log("this:",this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event){
    // console.log(event.target.value);
    this.props.fetchTaxiLocation(event.target.value);
    this.props.fetchDirecions(this.props.lat,this.props.lng,event.target.value)
  }

  render(){
    return (
      <select onChange={this.onSelectChange} >
        <option value="ntut">NTUT</option>
        <option value="station">台北車站</option>
        <option value="taipei101">台北101</option>
      </select>
    )
  }
}

export default connect(null,{fetchTaxiLocation,fetchDirecions})(SelectBar);
