import React, { Component } from "react";

class CategoryList extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="category-list">
        <section>
          <h2>{this.props.title}</h2>
          <ul>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
            {/* <li>Recreational</li>
            <li>Mini Company</li>
            <li>Junior Company</li> */}
          </ul>
        </section>
      </div>
    );
  }
}

export default CategoryList;
