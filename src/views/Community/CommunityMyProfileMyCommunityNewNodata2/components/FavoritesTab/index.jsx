import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class FavoritesTab extends Component {
    state = { activeItem: "ManageList" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div className="favorites_tab">
                <Menu>
                    <Menu.Item
                        name="AllList"
                        active={activeItem === "AllList"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="#"
                    >
                        전체 <span className="total">+20</span>
                    </Menu.Item>
                    <Menu.Item
                        name="LikeList"
                        active={activeItem === "LikeList"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="#"
                    >
                        즐겨찾기 <span className="total"></span>
                    </Menu.Item>
                    <Menu.Item
                        name="ManageList"
                        active={activeItem === "ManageList"}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="#"
                    >
                        운영중 <span className="total"></span>
                    </Menu.Item>
                </Menu>
        </div>
        );
    }
}

export default FavoritesTab;