import React, { Component } from "react";

class BottomButton extends Component {
  render() {
    return (
      <div className="admin_bottom_button line">
        <button class="ui button admin_table_button02 left" disabled="" tabindex="">그룹 삭제</button>
        <button class="ui button admin_table_button02" disabled="" tabindex="">목록</button>
        <button class="ui button admin_table_button" disabled="" tabindex="">저장</button>
      </div>
    );
  }
}

export default BottomButton;
