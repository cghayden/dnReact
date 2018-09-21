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
              <h1>Class Categories</h1>

              {/* wait for user to be loaded into provider... */}
              {user.classCategories &&
                console.log(Object.keys(user.classCategories))}
              {/* for each category in categories, render CategoryList */}
              {user.classCategories &&
                Object.keys(user.classCategories).map(cat => (
                  <CategoryList
                    key={cat}
                    title={cat}
                    items={user.classCategories[cat]}
                  />
                ))}

              {/* <div className="category-list">
                <section>
                  <h2>Levels</h2>
                  <ul>
                    <li>Recreational</li>
                    <li>Mini Company</li>
                    <li>Junior Company</li>
                  </ul>
                </section>
              </div>

              <div className="category-list">
                <section>
                  <h2>Styles</h2>
                  <ul>
                    <li>Jazz</li>
                    <li>Lyric</li>
                    <li>Hip Hop</li>
                  </ul>
                </section>
              </div> */}
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default ClassCategories;
