import React, { Component } from "react";

class CategoryList extends Component {
  render() {
    const items = this.props.items;
    return (
      <div className="category-list">
        <section>
          <div className="list-header">
            <h2>{this.props.title}</h2>
          </div>
          <ul>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default CategoryList;
