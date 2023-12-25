import React, { Component } from "react";

class TableTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="table_list_string">
          <strong>게시글 통계 조회</strong>
        </div>
        <div className="right-wrap">
          <span>2021.05.11 화요일 기준 전체 게시글 수{' '}<strong>138</strong></span>
        </div>
      </div>
    );
  }
}

export default TableTitle;
