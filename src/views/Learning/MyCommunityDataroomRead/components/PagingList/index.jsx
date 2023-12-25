import React, { Component } from "react";
import PagingListPrev from "../PagingListPrev";
import PagingListNext from "../PagingListNext";

class PagingList extends Component {
  render() {
    return (
      <div className="paging-list">
        <PagingListPrev />
        <PagingListNext />
      </div>
    );
  }
}

export default PagingList;
