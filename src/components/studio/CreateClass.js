import React, { Component } from "react";
import SelectBox from "./SelectBox";
import { Link } from "@reach/router";
import firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "../../firebase";
import UserContext from "../UserContext";

export default class CreateClass extends Component {
  state = {};

  handleSelectBoxChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  saveDance = async event => {
    event.preventDefault();
    const newDance = { ...this.state };

    // save in collection of classes...
    await firestore
      .collection("studios")
      .doc(this.props.uid)
      .collection("classes")
      .doc(`dance${Date.now()}`)
      .set(newDance)
      .then(() => {
        console.log("Collection successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    //save class as an object in array of 'classes'
    const studioRef = await firestore.collection("studios").doc(this.props.uid);
    await studioRef.update({
      classes: firebase.firestore.FieldValue.arrayUnion(newDance)
    });
    //save as embedded object in an object of 'dances'
    const dancesObj = `dances.dance${Date.now()}`;
    await studioRef.update({
      [dancesObj]: newDance
    });

    this.setState({});
  };

  customizeSelectBoxes = level => {
    if (level === "rec") {
      return (
        <SelectBox
          name="ages"
          choices={this.props.categories.ages}
          onChange={this.handleSelectBoxChange}
        />
      );
    }
  };

  render() {
    const days = ["Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat.", "Sun."];

    return (
      <UserContext.Consumer>
        {user => (
          <div className="container container-single">
            <form className="form-control" onSubmit={this.saveDance}>
              <div className="form-header">
                <h2>Create a new class</h2>
                {this.state.error && <h5>{this.state.error}</h5>}
              </div>
              <div className="classSelectors">
                <div className="form-field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleSelectBoxChange}
                  />
                </div>
                {user.classCategories &&
                  Object.keys(user.classCategories).map(cat => (
                    <SelectBox
                      key={cat}
                      name={cat}
                      choices={user.classCategories[cat]}
                      onChange={this.handleSelectBoxChange}
                    />
                  ))}
                <div className="form-field">
                  <label htmlFor="daysChoices">
                    Day:{" "}
                    <select
                      id="daysChoices"
                      value={this.state.selection}
                      name="day"
                      onChange={this.handleChange}
                    >
                      <option default value="Select..." disabled>
                        Day ...
                      </option>
                      {days.map(choice => (
                        <option key={choice} value={`${choice}`}>
                          {choice}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="timeInput">
                  <label>Start Time</label>
                  <input
                    type="text"
                    name="startHour"
                    onChange={this.handleSelectBoxChange}
                  />
                  <span>:</span>
                  <input
                    type="text"
                    name="startMin"
                    onChange={this.handleSelectBoxChange}
                  />
                </div>
                <div className="timeInput">
                  <label>End Time</label>
                  <input
                    type="text"
                    name="endHour"
                    onChange={this.handleSelectBoxChange}
                  />
                  <span>:</span>
                  <input
                    type="text"
                    name="endMin"
                    onChange={this.handleSelectBoxChange}
                  />
                </div>
                <div className="form-field">
                  <select
                    id="am-pm"
                    value={this.state.selection}
                    name="am-pm"
                    onChange={this.handleChange}
                  >
                    <option default value="PM">
                      PM
                    </option>
                    <option value="AM">AM</option>
                  </select>
                </div>
              </div>

              <div className="form-footer">
                <button className="btn" onClick={() => this.handleSubmit}>
                  Submit
                </button>
                <Link to="../editClassCategories">
                  Edit Class Descriptions{" "}
                </Link>
              </div>
            </form>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

//time select boxes...//
// const hours = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12"
// ];
// const minutes = [
//   "00",
//   "05",
//   "10",
//   "15",
//   "20",
//   "25",
//   "30",
//   "35",
//   "40",
//   "45",
//   "50",
//   "55"
// ];

// <div className="form-field">
//                   <label htmlFor="startHour">
//                     Start H:{" "}
//                     <select
//                       id="startHour"
//                       value={this.state.selection}
//                       name="startHour"
//                       onChange={this.handleChange}
//                     >
//                       {hours.map(choice => (
//                         <option key={choice} value={`${choice}`}>
//                           {choice}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                 </div>
//                 <div className="form-field">
//                   <label htmlFor="startMin">
//                     Start M:{" "}
//                     <select
//                       id="startMin"
//                       value={this.state.selection}
//                       name="startMin"
//                       onChange={this.handleChange}
//                     >
//                       <option default value="Select..." disabled>
//                         ...
//                       </option>
//                       {minutes.map(choice => (
//                         <option key={choice} value={`${choice}`}>
//                           {choice}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                 </div>
//                 <div className="form-field">
//                   <label htmlFor="endHour">
//                     End H:{" "}
//                     <select
//                       id="endHour"
//                       value={this.state.selection}
//                       name="endHour"
//                       onChange={this.handleChange}
//                     >
//                       <option default value="Select..." disabled>
//                         ...
//                       </option>
//                       {hours.map(choice => (
//                         <option key={choice} value={`${choice}`}>
//                           {choice}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                 </div>
//                 <div className="form-field">
//                   <label htmlFor="startMin">
//                     End M:{" "}
//                     <select
//                       id="startMin"
//                       value={this.state.selection}
//                       name="startMin"
//                       onChange={this.handleChange}
//                     >
//                       <option default value="Select..." disabled>
//                         ...
//                       </option>
//                       {minutes.map(choice => (
//                         <option key={choice} value={`${choice}`}>
//                           {choice}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                 </div>
