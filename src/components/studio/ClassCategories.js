import React, { Component } from "react";
import UserContext from "../UserContext";
import CategoryList from "./CategoryList";
import AddCategory from "./AddCategory";
import Toggler from "../Toggler";
class ClassCategories extends Component {
  addCategory = () => {
    document.getElementById("categories");
  };

  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div className="container">
            <div className="categories">
              <div className="container-header">
                <h1>Class Categories</h1>
              </div>
              <div className="">
                <Toggler>
                  {({ on, togglerFunc }) => (
                    <div>
                      {on && <AddCategory uid={user.uid} />}
                      <button onClick={togglerFunc}>Add a Category</button>
                    </div>
                  )}
                </Toggler>
                {/* buttons that toggle form for adding a new category */}
              </div>
              <div className="categories-body">
                {/* wait for user to be loaded into provider... && */}
                {/* for each category in categories, render CategoryList */}
                {user.classCategories &&
                  Object.keys(user.classCategories).map(cat => (
                    <CategoryList
                      key={cat}
                      category={cat}
                      items={user.classCategories[cat]}
                      uid={user.uid}
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
