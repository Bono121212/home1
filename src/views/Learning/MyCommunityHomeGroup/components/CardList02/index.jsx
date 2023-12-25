import React, { Component } from "react";
import cardOpen from "../../../../../images/all/btn-card-list-open.png";

class CardList02 extends Component {
  render() {
    return (
      <div className="card-group-list each-list">
        <h3>3분과 그룹</h3>
        <div class="card-group-span">
          <span>tmddnjs0078</span>
          <span>멤버</span>
          <span>99,999</span>
          <button>
            <img src={cardOpen} />
          </button>
        </div>
      </div>
    );
  }
}

export default CardList02;
