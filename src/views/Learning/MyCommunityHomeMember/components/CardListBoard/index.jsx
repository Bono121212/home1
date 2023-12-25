import React, { Component } from "react";
import Card01 from '../Card01';


class CardListBoard extends Component {
  render() {
    return (
      <div className="mycommunity-card-list">
        <Card01 managerFlag={true}/>
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
        <Card01 />
      </div>
      
    );
  }
}

export default CardListBoard;
