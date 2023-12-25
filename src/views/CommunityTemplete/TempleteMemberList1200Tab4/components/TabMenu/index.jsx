import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class TabMenu extends Component {
  state = { activeItem: "Waiting" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className="contents-tab-menu templete">
        <Menu className="sku">
          <Menu.Item
            name="Members"
            active={activeItem === "Members"}
            onClick={this.handleItemClick}
            as={Link}
          >
            전체멤버<span className="count">50</span>
          </Menu.Item>
          <Menu.Item
            name="Manager"
            active={activeItem === "Manager"}
            onClick={this.handleItemClick}
            as={Link}
          >
            관리자<span className="count">3</span>
          </Menu.Item>
          <Menu.Item
            name="Group"
            active={activeItem === "Group"}
            onClick={this.handleItemClick}
            as={Link}
          >
            그룹<span className="count">4</span>
          </Menu.Item>
          <Menu.Item
            name="Waiting"
            active={activeItem === "Waiting"}
            onClick={this.handleItemClick}
            as={Link}
          >
            가입대기<span className="count">4</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TabMenu;
