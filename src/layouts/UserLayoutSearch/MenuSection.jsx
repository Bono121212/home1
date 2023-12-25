import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'

export default class MenuSection extends Component {
    state = {activeItem: '회원 관리'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (

            <Menu pointing secondary>
                <Menu.Item
                    name='회원 관리'
                    active={activeItem === 'member'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Learning 관리'
                    active={activeItem === 'learning'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='콘텐츠 관리'
                    active={activeItem === 'contents'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='커뮤니티 관리'
                    active={activeItem === 'community'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='서비스 관리'
                    active={activeItem === 'service'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='시스템 관리'
                    active={activeItem === 'system'}
                    onClick={this.handleItemClick}
                />
            </Menu>

        )
    }
}
