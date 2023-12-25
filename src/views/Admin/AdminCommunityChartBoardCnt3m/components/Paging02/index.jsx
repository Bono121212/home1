import React, { Component } from "react";
import { Link } from "react-router-dom";

class Paging extends Component {
  render() {
    return (
      <div className="lms-paging-holder">
        <Link className="lms-num lms-on">1</Link>
        <Link className="lms-num">2</Link>
      </div>
    );
  }
}

export default Paging;
