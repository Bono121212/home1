import React, { Component } from "react";
const styles = { width:"7rem" };

class TableTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="list-number">
          총 <strong>99개</strong>의 리스트가 있습니다.
        </div>
        <div className="right-wrap">
          <button class="ui icon button post" style={styles}>
            <i aria-hidden="true" class="icon post"></i>자료등록
          </button>
        </div>
      </div>
    );
  }
}

export default TableTitle;
