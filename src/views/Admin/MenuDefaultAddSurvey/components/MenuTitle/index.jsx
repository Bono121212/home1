import React, { Component } from "react";

class MenuTitle extends Component {
  render() {
    return (
      <div className="admin_menu_title">
        <p>
          ㆍ 메뉴를 편집한 후에 <strong>저장</strong> 버튼을 눌러야 반영됩니다.
        </p>
        <p>
          ㆍ <strong>Home, 전체 글, 공지사항</strong> 메뉴는 편집 및 삭제가
          불가합니다.
        </p>
      </div>
    );
  }
}

export default MenuTitle;
