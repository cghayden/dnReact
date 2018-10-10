import React, { Component } from "react";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";
import Toggler from "../Toggler";
import UserContext from "../UserContext";

export default class ApparelCategories extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div className="container">
            <div className="categories">
              <div className="container-header">
                <h1>Apparel Categories & Choices</h1>
              </div>
              <div className="">
                <Toggler>
                  {({ on, togglerFunc }) => (
                    <div>
                      {on && (
                        <AddCategory group="apparelCategories" uid={user.uid} />
                      )}
                      <button
                        id="addCategory"
                        className="btn"
                        onClick={togglerFunc}
                      >
                        Add an Apparel Category
                      </button>
                    </div>
                  )}
                </Toggler>
                {/* buttons that toggle form for adding a new category */}
              </div>
              <div className="categories-body">
                {/* wait for user to be loaded into provider... && */}
                {/* for each category in categories, render CategoryList */}
                {user.apparelCategories &&
                  Object.keys(user.apparelCategories).map(cat => (
                    <CategoryList
                      group="apparelCategories"
                      key={cat}
                      category={cat}
                      items={user.apparelCategories[cat]}
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
