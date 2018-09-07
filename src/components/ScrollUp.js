import React from "react";

class ScrollUp extends React.Component {
  componentDidMount() {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return this.props.children;
  }
}

export default ScrollUp;

// const Team = () => (
//   <ScrollUp>
//     <div>{/* ... */}</div>
//   </ScrollUp>
// )
