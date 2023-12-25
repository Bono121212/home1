import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class TabMenu extends Component {
  state = { activeItem: "Approval" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className="contents-tab-menu">
        <Menu className="sku">
          <Menu.Item
            name="Community"
            active={activeItem === "Community"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
            className="active"
          >
            커뮤니티
          </Menu.Item>
          <Menu.Item
            name="Feed"
            active={activeItem === "Feed"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
          >
            Feed
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TabMenu;
