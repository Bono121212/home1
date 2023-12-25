import React, { Component } from "react";
import { Select } from "semantic-ui-react";
// import approval from "../../../../../images/all/icon-approval-24-px.png";
const selectOptions02 = [
  { key: "twenty", value: "twenty", text: "20명 정렬" },
];

const selectOptions03 = [
  { key: "member", value: "member", text: "멤버" },
];

class TableTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="table_list_string">
          <span>ㆍ전체 <strong>30,980명</strong>멤버</span>

         <Select
                className="ui small-border admin_table_select"
                defaultValue={selectOptions02[0].value}
                options={selectOptions02}
              />
        </div>
        <div className="right-wrap right_txt">
          <span>선택한 멤버를</span>
        <Select
                className="ui small-border admin_table_select"
                defaultValue={selectOptions03[0].value}
                options={selectOptions03}
              />
              <button class="ui button admin_table_button02" disabled="" tabindex="">등급 변경</button>
              <button class="ui button admin_table_button" disabled="" tabindex="">멤버 삭제</button>
              <button class="ui button admin_table_button">EXCEL 다운로드</button>

              {/* <button class="ui button admin_table_button02" disabled="" tabindex="">그룹 멤버 삭제</button> */}
        </div>
      </div>
    );
  }
}

export default TableTitle;
