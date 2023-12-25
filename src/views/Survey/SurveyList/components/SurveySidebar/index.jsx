import React, {Component} from 'react'
import {Header, Menu} from 'semantic-ui-react'

class SurveySidebar extends Component {
    state = {};
    handleItemClick = (name) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Header as='h3'>
                    과정 관리
                </Header>
                <Menu vertical>
                    <Menu.Item>
                        <Menu.Header>설문</Menu.Header>

                        <Menu.Menu>
                            <Menu.Item
                                name='course'
                                active={activeItem === 'course'}
                                onClick={this.handleItemClick}
                            >
                                설문조사
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>

                </Menu>
            </div>
        )
    }
}

export default SurveySidebar;