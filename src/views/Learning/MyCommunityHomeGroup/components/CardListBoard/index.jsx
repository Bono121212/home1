import React, { Component } from "react";
import Card01 from "../Card01";
import CardTitle from "../CardTitle";
import CardBottom from "../CardBottom";

class CardListBoard extends Component {
  render() {
    return (
      <div className="mycommunity-card-list">
        <CardTitle cardOpenFlag={this.props.cardOpenFlag}/>
        <div className="card-group-body" style={this.props.cardOpenFlag ? {display: "block"} : {display: "none"}}>
            <p>그룹에 대한 안내 문구가 들어갑니다.</p>
            <Card01 managerFlag={true}/>
            <Card01 />
            <Card01 />
            <Card01 />
            <Card01 />
            <Card01 />
            <Card01 />
            <Card01 />
            <CardBottom />
        </div>
      </div>
    );
  }
}

export default CardListBoard;
