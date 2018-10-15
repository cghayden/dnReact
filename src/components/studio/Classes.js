import React from "react";
import UserContext from "../UserContext";
import Filter from "../Filter";
import ActiveFiltersBar from "../ActiveFiltersBar";
import ClassCardsDisplay from "./ClassCardsDisplay";
import ClassCard from "./ClassCard";
class Classes extends React.Component {
  state = {
    checked: [],
    filterResults: []
  };

  componentDidMount() {
    this.setState({ filterResults: this.props.classes });
  }

  handleFilterButton = (event, category) => {
    event.preventDefault();
    const name = event.target.id;
    const button = document.getElementById(event.target.id);
    button.setAttribute("disabled", "true");
    let filterResults = [...this.state.filterResults];
    const newResults = filterResults.filter(dance => dance[category] === name);
    this.setState({ filterResults: newResults });
    let checked = [...this.state.checked, [category, name]];
    this.setState({ checked });
  };

  clearFilter = () => {
    const buttons = Array.from(document.getElementsByClassName("filterButton"));
    buttons.forEach(button => button.removeAttribute("disabled"));

    this.setState({ filterResults: this.props.classes });
    this.setState({ checked: [] });
  };

  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div className="content">
            <h2>
              {user.name}
              's Classes
            </h2>
            <div className="classes-layout">
              <div className="sidebar-filter">
                <div className="filter-form">
                  <button onClick={this.clearFilter}>Clear All</button>
                  {Object.keys(user.classCategories).map(cat => (
                    <Filter
                      key={cat}
                      category={cat}
                      classes={user.classes}
                      choices={user.classCategories[cat]}
                      handleFilterButton={this.handleFilterButton}
                    />
                  ))}
                </div>
              </div>
              <div className="classes-cards-display">
                <ActiveFiltersBar checked={this.state.checked} />

                <ClassCardsDisplay
                  filterResults={this.state.filterResults}
                  dances={user.dances}
                  classes={user.classes}
                />
              </div>
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Classes;

// handleCheckboxChange = (event, category) => {
//   const name = event.target.name;
//   let filterResults = [...this.state.filterResults];
//   const newResults = filterResults.filter(dance => dance[category] === name);
//   this.setState({ filterResults: newResults });
//   let checked = [...this.state.checked, [category, name]];
//   this.setState({ checked });
// };
