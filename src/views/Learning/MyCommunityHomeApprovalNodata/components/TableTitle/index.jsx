import React, { Component } from "react";
import check from "../../../../../images/all/icon-addinfo-24-px.png";
import approval03 from "../../../../../images/all/icon-approval02-24-px.png";
import approval02 from "../../../../../images/all/icon-reject-24-px.png";

class TableTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="list-number">
          총 <strong>12</strong>명
        </div>
        <div className="right-wrap board-down-title-right">
          <button class="ui icon button left post delete">
            <img src={check} />
            전체선택
          </button>
          
          <button class="ui icon button left post list2 complete02">
            <img src={approval03} />
            가입승인
          </button>
          <button class="ui icon button left post list2 complete">
            <img src={approval02} />
            가입반려
          </button>
        </div>
      </div>
    );
  }
}

export default TableTitle;