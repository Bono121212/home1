import React, { Component } from "react";

class AdminTab extends Component {
  render() {
    return (
      <div className="admin_tab_top">
        <ul>
          <li>멤버 관리</li>
          <li class="active">메뉴 관리</li>
          <li>템플릿 관리</li>
          <li>인트로 관리</li>
          <li>통계</li>
        </ul>
      </div>
    );
  }
}

export default AdminTab;
