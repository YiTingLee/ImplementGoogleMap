import React,{Component} from 'react';

export default class SelectBar extends Component{

  onSelectChange(event){
    console.log(event.target.value);
  }

  render(){
    return (
      <select onChange={this.onSelectChange}>
        <option value="ntut">NTUT</option>
        <option value="station">台北車站</option>
        <option value="taipei101">台北101</option>
      </select>
    )
  }
}
