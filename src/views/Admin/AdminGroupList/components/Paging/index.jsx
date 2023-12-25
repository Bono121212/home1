import React, { Component } from "react";
import { Link } from "react-router-dom";

class Paging extends Component {
  render() {
    return (
      <div className="lms-paging-holder">
        <Link className="lms-prev">이전10개</Link>
        <Link className="lms-num lms-on">1</Link>
        <Link className="lms-next">이후10개</Link>
      </div>
    );
  }
}

export default Paging;
