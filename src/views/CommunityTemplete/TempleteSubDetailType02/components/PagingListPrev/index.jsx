import React, { Component } from "react";

class PagingListPrev extends Component {
  render() {
    return (
      <div className="paging-list-box">
        <div className="paging-list-icon"></div>
        <h2>이전글</h2>
        <h3><strong>UX 관점에서의 멀티태스킹 알아보기</strong></h3>
        <div class="paging-list-span">
          <span>2022.06.21 17:06</span>
        </div>
      </div>
    );
  }
}

export default PagingListPrev;
