import ClassCategories from "./ClassCategories";
import ApparelCategories from "./ApparelCategories";

import React, { Component, Fragment } from "react";

export default class EditCatalog extends Component {
  render() {
    return (
      <Fragment>
        <ClassCategories />
        <ApparelCategories />
      </Fragment>
    );
  }
}
