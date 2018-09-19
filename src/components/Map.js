import React, { Component, Fragment } from "react";

class Map extends Component {
  state = {
    address: "address"
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  initAutocomplete = () => {
    var placeSearch, autocomplete;
    var componentForm = {
      street_number: "short_name",
      route: "long_name",
      locality: "long_name",
      administrative_area_level_1: "short_name",
      country: "long_name",
      postal_code: "short_name"
    };
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      { types: ["geocode"] }
    );

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener("place_changed", () => {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();

      for (var component in componentForm) {
        document.getElementById(component).value = "";
        document.getElementById(component).disabled = false;
      }

      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
          this.setState({ [addressType]: val });
        }
      }
    });
  };

  onScriptLoad = () => {
    // const map = new window.google.maps.Map(
    //   document.getElementById(this.props.id),
    //   this.props.options
    // );
    // this.props.onMapLoad(map);

    //google stock code below

    this.initAutocomplete();
  };

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyD6U6TbwQC4hiPxDc-RfKglqSuS_EsmsjU&libraries=places`;
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener("load", e => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  getvalues = event => {
    event.preventDefault();
    const field = document.getElementById("city");
    console.log("field", field);
  };

  render() {
    return (
      <Fragment>
        <div id="locationField" className="signup">
          <form onSubmit={() => this.getValues}>
            <div>
              <input
                id="autocomplete"
                placeholder="Enter your address"
                type="text"
              />
            </div>
            div
            <label htmlFor="street_number">Street Number: </label>
            <input
              id="street_number"
              name="street_number"
              disabled="true"
              onChange={this.handleInputChange}
            />
            <label htmlFor="route">
              Street:
              <input
                id="route"
                name="street"
                disabled="true"
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="locality">City: </label>
            <input
              id="locality"
              name="locality"
              disabled="true"
              onChange={this.handleInputChange}
            />
            <label htmlFor="administrative_area_level_1">State: </label>
            <input
              id="administrative_area_level_1"
              name="administrative_area_level_1"
              disabled="true"
              onChange={this.handleInputChange}
            />
            <label htmlFor="postal_code">
              Zip code:
              <input
                id="postal_code"
                name="postal_code"
                disabled="true"
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              disabled="true"
              onChange={this.handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          {/* <input id="geolocate" type="text" name="geolocate" /> */}
        </div>
      </Fragment>
    );
  }
}

export default Map;

// const input = document.getElementById("geolocate");
// input.addEventListener("keydown", e => {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     var results = document.querySelectorAll(".pac-item");
//     const firstResult = results[0];
//     firstResult.click();

//     // const address = firstResult.textContent;
//     // //geocode on first result
//     // const geocoder = new window.google.maps.Geocoder();
//     // geocoder.geocode({ address: address }, (results, status) => {
//     //   console.log("geocoder status:", status);
//     //   if (status == window.google.maps.GeocoderStatus.OK) {
//     //     console.log("results", results);

//     //     const address = results[0].formatted_address;
//     //     const lat = results[0].geometry.location.lat();
//     //     const lng = results[0].geometry.location.lng();
//     //     const latlng = new window.google.maps.LatLng(lat, lng);
//     //     console.log("address", address);
//     //     console.log("latlng", latlng);
//     //   }
//     // });
//   }
// });
// // window.google.maps.event.addDomListener(input, "keydown", event => {
// //   if (event.keyCode === 13) {
// //     console.log(event);
// //     event.preventDefault();
// //   }
// // });
// const autocomplete = new window.google.maps.places.Autocomplete(input);
// autocomplete.addListener("place_changed", () => {
//   const place = autocomplete.getPlace();
//   // this.setState({
//   //   lng: place.geometry.location.lng(),
//   //   lat: place.geometry.location.lat()
//   // });

//   console.log("lat:", place.geometry.location.lat());
//   // console.log("lat:", place.geometry.location.lng());
//   // loadPlaces(map, place.geometry.location.lat(), place.geometry.location.lng());
// });
