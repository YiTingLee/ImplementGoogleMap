import React, { Component } from 'react';
import { GoogleMap, OverlayView } from 'react-google-maps';

export default class TaxiMarker extends Component{

  getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) };
}

  render(){
    // console.log('hi:', this.props.name);
    if(this.props.flag == 1){
      return(
        <OverlayView
          position={{ lat: this.props.lat , lng: this.props.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div>
            <img height="30" width="30" src={`/src/data/taxiIcon.png`} />
            <div>{this.props.name}</div>
            <div>{this.props.car_id}</div>
          </div>
        </OverlayView>
      );
    }else{
      return(
        <OverlayView
          position={{ lat: this.props.lat , lng: this.props.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div>
            <img height="30" width="30" src={`/src/data/userIcon.png`} />
            <div>{this.props.name}</div>
          </div>
        </OverlayView>
      );
    }
  }
}
