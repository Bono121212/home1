import React, { Component } from "react";
import { Link } from "react-router-dom";

class Paging extends Component {
  render() {
        return (
        <div className="lms-paging-holder">
            <Link className="lms-prev">이전5개</Link>
            <Link className="lms-num lms-on">1</Link>
            <Link className="lms-num">2</Link>
            <Link className="lms-num">3</Link>
            <Link className="lms-num">4</Link>
            <Link className="lms-num">5</Link>
            <Link className="lms-next">이후5개</Link>
        </div>
        );
    }
}

export default Paging;
