import React, { Component } from "react";
import UserContext from "../UserContext";
import Map from "../Map";

class ParentIndex extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => {
          return (
            <div className="pv2">
              <h2>Parent Home</h2>
              <p className="pv2">{user.name}</p>
              <Map
                id="myMap"
                options={{
                  center: { lat: 41.0082, lng: 28.9784 },
                  zoom: 8
                }}
                onMapLoad={map => {
                  var marker = new window.google.maps.Marker({
                    position: { lat: 41.0082, lng: 28.9784 },
                    map: map,
                    title: "Hello Istanbul!"
                  });
                }}
              />
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ParentIndex;
