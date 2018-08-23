import React from "react";

class CompetitionCard extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>
          <a
            href="http://www.bravocompetition.com/event/worcester-ma/"
            rel="noopener noreferrer"
            target="_blank"
          >
            BRAVO
          </a>
        </h3>
        <div className="address">
          <p>Mar. 2 - 4</p>
          <p>Worcester North High School</p>
          <p>140 Harrington Way</p>
          <p>Worcester, MA 01604</p>
          <a
            href="http://maps.google.com/?&daddr=140+Harrington+Way+Worcester+MA+01604"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="highlight">Directions</p>
          </a>
        </div>
        <div className="hotel">
          <a
            href="https://www.ihg.com/holidayinnexpress/hotels/us/en/auburn/orhma/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-ORHMA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="highlight">Holiday Inn Express</p>
          </a>
          <p>10-12 Johnson St.</p>
          <p>Auburn, MA 01501</p>
          <p>Room Block: "Bravo Attendees", $125</p>
        </div>
      </div>
    );
  }
}

export default CompetitionCard;
