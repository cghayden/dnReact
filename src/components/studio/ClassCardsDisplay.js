import React, { Component } from "react";
import ClassCard from "./ClassCard";

export default class ClassCardsDisplay extends Component {
  render() {
    if (this.props.filterResults) {
      return this.props.filterResults.map((obj, index) => (
        <ClassCard key={index} dance={obj} />
      ));
    }
    return null;
  }
}
