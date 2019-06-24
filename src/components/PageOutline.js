import React, { Component } from "react";

export class PageOutline extends Component {
  render() {
    return <div className="outline">{this.props.children}</div>;
  }
}

export default PageOutline;
