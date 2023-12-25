import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class TabMenu extends Component {
  state = { activeItem: "Members" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className="contents-tab-menu">
        <Menu className="sku">
          <Menu.Item
            name="Members"
            active={activeItem === "Members"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
          >
            Members
          </Menu.Item>
          <Menu.Item
            name="Groups"
            active={activeItem === "Groups"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
          >
            Groups
          </Menu.Item>
          <Menu.Item
            name="Approval"
            active={activeItem === "Approval"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
          >
            가입대기<span className="count">+ 12</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TabMenu;
