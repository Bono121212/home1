import React, { Component } from "react";

class AdminTab02 extends Component {
  render() {
    return (
      <div className="admin_tab">
              <ul>
                <li>멤버</li>
                <li>가입대기</li>
                <li class="active">멤버 일괄 등록</li>
                <li>그룹</li>
              </ul>
            </div>
    );
  }
}

export default AdminTab02;
