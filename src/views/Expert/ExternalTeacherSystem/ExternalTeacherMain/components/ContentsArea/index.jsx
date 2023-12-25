import React, {Component, createRef} from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import TableTitle from "../TableTitle";
import TableBody from "../TableBody";
import Paging from "../Paging";
import AllStatus from "../AllStatus";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Card'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            
            <div ref={this.contextRef}  className="main-info-contents">
                <AllStatus/>
                
                <div className="tab-area">
                    <Menu className='tab-wrap'>
                        <Menu.Item
                            name='Card'
                            active={activeItem === 'Card'}
                            onClick={this.handleItemClick}
                            as={Link} to="/"
                            >
                            카드(<span>5</span>) 
                        </Menu.Item>
                        <Menu.Item
                            name='Cube'
                            active={activeItem === 'Cube'}
                            onClick={this.handleItemClick}
                            as={Link} to="/"
                            >
                            큐브(<span>13</span>)
                        </Menu.Item>
                    </Menu>

                    <Segment className='full'>
                        {/* 테이블 제목 */}
                        <TableTitle />
                        
                        {/* 테이블 리스트 */}
                        <TableBody />

                        <div className="paging margin-none">
                            <Paging />
                        </div>
                </Segment>
                </div> 
            </div>
        )
    }
}

export default ContentsArea