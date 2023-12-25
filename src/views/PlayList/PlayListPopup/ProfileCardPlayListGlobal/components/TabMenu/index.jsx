import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class TabMenu extends Component {
  state = { activeItem: "Playlist" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className="contents-tab-menu">
        <Menu className="sku">
          <Menu.Item
            name=""
            active={activeItem === "Playlist"}
            onClick={this.handleItemClick}
            as={Link}
            to="Playlist"
            className="active"
          >
            Playlist
          </Menu.Item>
{/* 외국인 계정시 숨김
            <Menu.Item
            name="Community"
            active={activeItem === "Community"}
            onClick={this.handleItemClick}
            as={Link}
            to=""
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
        */}
        </Menu>
      </div>
    );
  }
}

export default TabMenu;
