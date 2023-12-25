import React, { Component } from "react";
import { Link } from "react-router-dom";
import PagingListPrev from "../PagingListPrev";
import PagingListNext from "../PagingListNext";

class PagingList extends Component {
  render() {
    return (
      <div className="paging-list">
        <Link to="">
          <PagingListNext />
        </Link>
        <Link to="">
          <PagingListPrev />
        </Link>
      </div>
    );
  }
}

export default PagingList;
