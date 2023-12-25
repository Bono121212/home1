import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class PagingListNext extends Component {
  render() {
    return (
      <div className="paging-list-box">
        <div className="paging-list-icon"></div>
        <h2>다음글</h2>
        {/* 22-07-06 이전/다음글 비공개 아이콘추가 h3 내에 strong 태그도 추가 */}
        <h3><strong>국내 사회적 기업 활동 사례국내 사회적 기업 활동 사례국내 사회적 기업 활동 사례국내 사회적 기업 활동 사례국내 사회적 기업 활동 사례국내 사회적 기업 활동 사례</strong><Icon className="secret"/></h3>
        <div class="paging-list-span">
          <span>2022.06.21 17:06</span>
        </div>
      </div>
    );
  }
}

export default PagingListNext;
