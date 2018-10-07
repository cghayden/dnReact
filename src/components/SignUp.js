import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firestore } from "../firebase";

class SignUp extends Component {
  state = {
    error: null,
    password: "",
    name: "",
    email: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleTypeChange = radioEvent => {
    this.setState({
      usertype: radioEvent.target.value
    });
  };

  createAccount = async event => {
    event.preventDefault();
    const address = {
      streetNumber: this.state.street_number,
      street: this.state.route,
      city: this.state.locality,
      state: this.state.administrative_area_level_1,
      zip: this.state.postal_code
    };
    const { password, usertype, name, email, lat, lng } = this.state;
    //1. register user  -> firebase
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.writeUserType(user.user.uid, usertype, name, email);
        this.writeUserData(
          user.user.uid,
          usertype,
          name,
          email,
          address,
          lat,
          lng
        );
        localStorage.setItem("dancerNotesUserType", usertype);
      })
      .catch(error => {
        // Handle Errors here.
        console.error(error);
        this.setState({ error });
      });
  };

  writeUserType = (uid, usertype, name, email) => {
    const userData = { name, email, usertype, uid };
    firestore
      .collection(`users`)
      .doc(uid)
      .set(userData)
      .then(function(docRef) {
        console.log("Document in users: ");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  writeUserData = (uid, usertype, name, email, address, lat, lng) => {
    const location = new firebase.firestore.GeoPoint(lat, lng);
    const userData = { name, email, uid, address, location };
    firestore
      .collection(`${usertype}s`)
      .doc(uid)
      .set(userData)
      .then(function(docRef) {
        console.log(`Document written in ${usertype}s`);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
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
  onScriptLoad = () => {
    this.initAutocomplete();
  };

  initAutocomplete = () => {
    var autocomplete;
    var componentForm = {
      street_number: "short_name",
      route: "long_name",
      locality: "long_name",
      administrative_area_level_1: "short_name",
      // country: "long_name",
      postal_code: "short_name"
    };
    autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );

    // When the user selects an address from the dropdown, populate the address fields in the form.
    autocomplete.addListener("place_changed", () => {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();
      console.log("place", place);
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const latLng = new window.google.maps.LatLng(lat, lng);
      this.setState({ lat, lng, latLng });

      //traverse keys:
      for (var component in componentForm) {
        document.getElementById(component).value = "";
        document.getElementById(component).disabled = false;
      }
      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
      place.address_components.forEach(component => {
        var addressType = component.types[0];
        console.log("addressType:", addressType);
        if (componentForm[addressType]) {
          var val = component[componentForm[addressType]];
          document.getElementById(addressType).value = val;
          this.setState({ [addressType]: val });
        }
      });
    });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="form-control">
        <form onSubmit={this.createAccount}>
          <h1 className="pb3">Create an Account</h1>
          {error && <p>{error.message}</p>}
          <fieldset>
            <legend>
              <p>UserType</p>
            </legend>
            <div className="fieldset-body">
              <div>
                <input
                  type="radio"
                  name="usertype"
                  id="parentRadio"
                  value="parent"
                  checked={this.state.usertype === "parent"}
                  onChange={this.handleTypeChange}
                />
                <label className="pl2 pr5" htmlFor="parentRadio">
                  Parent
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="usertype"
                  id="studioRadio"
                  value="studio"
                  checked={this.state.usertype === "studio"}
                  onChange={this.handleTypeChange}
                />
                <label className="pl1 pr5" htmlFor="studioRadio">
                  Studio
                </label>
              </div>
            </div>
          </fieldset>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              onChange={this.handleInputChange}
              type="password"
            />
          </div>

          <div className="geolocate">
            <div>
              <label>Address</label>
              <input
                id="autocomplete"
                name="address"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div>
              <label>Number</label>
              <input
                id="street_number"
                name="street_number"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div>
              <label>Route</label>
              <input
                id="route"
                name="route"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div>
              <label>City</label>
              <input
                id="locality"
                name="locality"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div>
              <label>State</label>
              <input
                id="administrative_area_level_1"
                name="administrative_area_level_1"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
            <div>
              <label>Zip Code</label>
              <input
                id="postal_code"
                name="postal_code"
                onChange={this.handleInputChange}
                type="text"
              />
            </div>
          </div>

          <div className="form-footer">
            <button
              className="btn"
              type="submit"
              disabled={this.state.usertype === null && !this.state.usertype}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
