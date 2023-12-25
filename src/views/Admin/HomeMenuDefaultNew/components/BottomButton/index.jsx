import React, { Component } from "react";

class BottomButton extends Component {
  render() {
    return (
      <div className="admin_bottom_button line none">
        <button class="ui button admin_table_button02 left" disabled="" tabindex="">임시저장</button>
        <button class="ui button admin_table_button02 left" disabled="" tabindex="">미리보기</button>
        <span class="regi_span left">※ [임시저장]을 해주셔야 [미리보기]를 확인하실 수 있습니다.</span>
        <button class="ui button admin_table_button" disabled="" tabindex="">저장</button>
      </div>
    );
  }
}

export default BottomButton;
