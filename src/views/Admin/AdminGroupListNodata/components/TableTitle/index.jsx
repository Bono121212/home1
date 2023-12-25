import React, { Component } from "react"; 

class TableTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="table_list_string">
         ㆍ전체 <strong>0개</strong>그룹등록
        </div>
        <div className="right-wrap">
              <button class="ui button admin_table_button" disabled="" tabindex="">Create</button>
        </div>
      </div>
    );
  }
}

export default TableTitle;
