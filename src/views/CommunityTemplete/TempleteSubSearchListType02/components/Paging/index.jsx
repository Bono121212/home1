import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Paging extends Component {
  render() {
    return (
      <div className="lms-paging-holder">
        <Link to='/' className="lms-prev">이전10개</Link>
        <Link to='/' className="lms-num lms-on">1</Link>
       {/*  <Link to='/' className="lms-num">2</Link>
        <Link to='/' className="lms-num">3</Link>
        <Link to='/' className="lms-num">4</Link>
        <Link to='/' className="lms-num">5</Link>
        <Link to='/' className="lms-num">6</Link>
        <Link to='/' className="lms-num">7</Link>
        <Link to='/' className="lms-num">8</Link>
        <Link to='/' className="lms-num">9</Link>
        <Link to='/' className="lms-num">10</Link> */}
        <Link to='/' className="lms-next">이후10개</Link>
      </div>
    );
  }
}

export default Paging;
