import React from 'react'
import {Map, Marker, InfoWindow} from 'google-maps-react';
import {GoogleApiWrapper} from 'google-maps-react';

class MapSingle extends React.Component {
  constructor (props) {
    super(props)

  }
  render() {
    return (
        <div className="mapSinglecol box">
          <Map google={window.google}
            clickableIcons={true}
            style={{height: '95%', position: 'relative', margin: '2px'}}
            className={'mapSingle'}
            zoom={14}
            initialCenter={{
              lat: 51.293036,
              lng: 18.032185
            }}
            centerAroundCurrentLocation={false}
            >
            <Marker
              title="Wesoly Ogrod"
              name="Wesoly Ogrod"
              position={{
                lat: 51.293036,
                lng: 18.032185
              }} />

            </Map>
        </div>
    );
  }
}

export default MapSingle
