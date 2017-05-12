import React, { Component } from 'react';
import { GoogleMap, OverlayView } from 'react-google-maps';

export default class TaxiMarker extends Component{

  getPixelPositionOffset(width, height) {
  return { x: -(width / 2), y: -(height / 2) };
}

  render(){
    return(
      <OverlayView
      position={{ lat: this.props.lat , lng: this.props.lng }}
      /*
       * An alternative to specifying position is specifying bounds.
       * bounds can either be an instance of google.maps.LatLngBounds
       * or an object in the following format:
       * bounds={{
       *    ne: { lat: 62.400471, lng: -150.005608 },
       *    sw: { lat: 62.281819, lng: -150.287132 }
       * }}
       */
      /*
       * 1. Specify the pane the OverlayView will be rendered to. For
       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
       *    Defaults to `OverlayView.OVERLAY_LAYER`.
       */
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      /*
       * 2. Tweak the OverlayView's pixel position. In this case, we're
       *    centering the content.
       */
      getPixelPositionOffset={this.getPixelPositionOffset}
      /*
       * 3. Create OverlayView content using standard React components.
       */
    >
      <div>
        <img height="30" width="30" src={`/src/data/taxiIcon.png`} />
        <div>driver</div>
      </div>
    </OverlayView>
    );
  }
}
