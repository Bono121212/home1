import React, { Component } from "react";

class BottomButton extends Component {
  render() {
    return (
      <div className="admin_bottom_button line none">
        <button class="ui button admin_table_button02 left" disabled="" tabindex="">미리보기</button>
        <button class="ui button admin_table_button" disabled="" tabindex="">저장</button>
      </div>
    );
  }
}

export default BottomButton;
