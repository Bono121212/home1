import React, { Component } from "react";

class AdminTab extends Component {
  render() {
    return (
      <div className="admin_tab_top">
        <ul>
          <li>멤버 관리</li>
          <li>메뉴 관리</li>
          <li>홈 관리</li>
        </ul>
      </div>
    );
  }
}

export default AdminTab;
