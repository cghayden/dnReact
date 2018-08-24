import React from "react";

class DanceCard extends React.Component {
  render() {
    return (
      <div className="card" id="teen1hiphop">
        <div className="dance-card-header pt2" data-collapse="teen1hiphop-body">
          <h2 className="dance-name">Teen 1 Hip Hop</h2>
          <p className="entry-number highlight">101</p>
          <div className="entryDT">
            <p className="entry-day highlight">Sat.</p>
            <p className="entry-time highlight">12:30</p>
          </div>
          <p className="dance-song highlight-cool">Instruction</p>
        </div>
        <div className="dance-card-body" id="teen1hiphop-body">
          <p className="dance-label">Tights:</p>
          <p className="dance-value">
            Light Suntan Capezio Ultra Soft (+ Black Pants)
          </p>
          <p className="dance-label">Shoes:</p>
          <p className="dance-value"> Pastry White Pop Tart Glitter</p>
          <p className="dance-label notes-label">Notes:</p>
          <div className="dance-value">
            <ul>
              <li>Pants: Should fit like leggings with no bunched bottoms</li>
              <li>Jacket: Hem sleeves, take in at waist if needed</li>
              <li>Return jackets for stoning</li>
              <li>Jacket: Zip up to bottom of sports bra</li>
              <li>Hair = Low Pony Tail, Center Part</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DanceCard;
