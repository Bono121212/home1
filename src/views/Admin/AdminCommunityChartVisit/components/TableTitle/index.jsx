import React, { Component } from "react";
//import approval from "../../../../../images/all/icon-approval-24-px.png";

class TableTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="table_list_string">
          <strong>방문수 통계 조회</strong>
        </div>
        <div className="right-wrap">
          <span>2021.05.11 화요일 기준 <strong>전체 방문수 14,303</strong></span>
        </div>
      </div>
    );
  }
}

export default TableTitle;
