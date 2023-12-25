import React, { Component } from "react";
import heartIcon from "../../../../../images/all/btn-community-like-on-16-px.png";

class TaskReadBottom01 extends Component {
  render() {
    return (
      <div class="task-read-bottom dataroom">
        <button class="ui icon button left post edit dataroom-icon">
          <img src={heartIcon} alt="" />
          좋아요
        </button>
        <button class="ui icon button left post edit">
          <i aria-hidden="true" class="icon edit24 icon"></i>Edit
        </button>
        <button class="ui icon button left post delete">
          <i aria-hidden="true" class="icon del24 icon"></i>Delete
        </button>
        <button class="ui icon button left post list2">
          <i aria-hidden="true" class="icon list24 icon"></i>List
        </button>
      </div>
    );
  }
}

export default TaskReadBottom01;
