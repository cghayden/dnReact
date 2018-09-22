import React, { Component } from "react";
import UserContext from "../UserContext";
import CategoryList from "./CategoryList";
class ClassCategories extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div className="container">
            <div className="categories">
              <div className="container-header">
                <h1>Class Categories</h1>
              </div>
              <div className="categories-body">
                {/* wait for user to be loaded into provider... && */}
                {/* for each category in categories, render CategoryList */}
                {user.classCategories &&
                  Object.keys(user.classCategories).map(cat => (
                    <CategoryList
                      key={cat}
                      title={cat}
                      items={user.classCategories[cat]}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default ClassCategories;
