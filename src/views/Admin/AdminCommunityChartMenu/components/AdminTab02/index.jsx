import React, { Component } from "react";

class AdminTab02 extends Component {
  render() {
    return (
      <div className="admin_tab">
        <ul>
          <li>방문수</li>
          <li>게시글</li>
          <li class="active">메뉴</li>
          <li>멤버</li>
        </ul>
      </div>
    );
  }
}

export default AdminTab02;
