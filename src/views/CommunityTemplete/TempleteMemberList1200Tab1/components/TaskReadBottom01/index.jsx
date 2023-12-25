import React, { Component } from "react";

class TaskReadBottom01 extends Component {
  render() {
    return (
      <div class="task-read-bottom border-none">
        <button class="ui icon button left post delete">
          <i aria-hidden="true" class="icon check icon"></i>선택 다운로드
        </button>
        <button class="ui icon button left post list2">
          <i aria-hidden="true" class="icon list24 icon"></i>전체 다운로드
        </button>
      </div>
    );
  }
}

export default TaskReadBottom01;
