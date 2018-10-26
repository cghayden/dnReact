import React, { Component } from "react";

export default class ClassCard extends Component {
  render() {
    const dance = { ...this.props.dance };

    return (
      <div className="class-card">
        <div>
          <h2>{dance.name}</h2>
        </div>
        <div>
          <ul>
            {Object.keys(dance).map(item => (
              <li key={item}>
                {item}: {dance[item]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
