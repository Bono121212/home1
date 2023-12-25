import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class TabMenu extends Component {
  state = { activeItem: "Groups" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className="contents-tab-menu">
        <Menu className="sku">
          <Menu.Item
            name="Member"
            active={activeItem === "Member"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
          >
            Member
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
