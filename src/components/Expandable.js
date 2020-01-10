import React, { Component } from "react";

const ShowHideMessage = ({ children, collapsed, expandCollapse }) => {
  return (
    <p onClick={expandCollapse}>
      {collapsed ? children.replace(/[a-zA-Z0-9]/g, "x") : children}
    </p>
  );
};

const Expandable = ComposedComponent =>
  class Expandable extends Component {
    constructor(props) {
      super(props);
      const collapsed = props.hidden && props.hidden === true ? true : false;
      this.state = { collapsed };
      this.expandCollapse = this.expandCollapse.bind(this);
    }

    expandCollapse() {
      let collapsed = !this.state.collapsed;
      this.setState({ collapsed });
    }
    render() {
      return (
        <ComposedComponent
          expandCollapse={this.expandCollapse}
          {...this.state}
          {...this.props}
        />
      );
    }
  };

const HiddenMessage = Expandable(ShowHideMessage);

export default Expandable;
