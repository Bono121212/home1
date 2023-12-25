import React, { Component } from "react";
import NewBoardList01 from "../NewBoardList01";
import NewBoardList02 from "../NewBoardList02";
import NewBoardList03 from "../NewBoardList03";
import NewBoardList04 from "../NewBoardList04";

class NewBoard extends Component {
  render() {
    return (
      <div className="new-board">
      <NewBoardList01 />
      <NewBoardList02 />
      <NewBoardList03 />
      <NewBoardList04 />
    </div>
    );
  }
}

export default NewBoard;
