import React, { Component } from "react";
import cardOpen from "../../../../../images/all/btn-card-list-open.png";

class CardList03 extends Component {
  render() {
    return (
      <div className="card-group-list each-list">
        <h3>그룹명이 들어갑니다</h3>
        <div class="card-group-span">
          <span>nickname</span>
          <span>멤버</span>
          <span>546</span>
          <button>
            <img src={cardOpen} />
          </button>
        </div>
      </div>
    );
  }
}

export default CardList03;
