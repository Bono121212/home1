import React, { Component } from "react";
import cardOpen from "../../../../../images/all/btn-card-list-open.png";

class CardList01 extends Component {
  render() {
    return (
      <div className="card-group-list each-list">
        <h3>2분과 그룹</h3>
        <div class="card-group-span">
          <span>sehoo36</span>
          <span>멤버</span>
          <span>200</span>
          <button>
            <img src={cardOpen} />
          </button>
        </div>
      </div>
    );
  }
}

export default CardList01;
