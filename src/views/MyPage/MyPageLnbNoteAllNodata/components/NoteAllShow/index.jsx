import React, {Component, createRef} from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
//import Calendar from '../Calendar';
import NoteAllNodata from '../NoteAllNodata';
//import ClearInputBoxSearch from '../ClearInputBoxSearch';

//import NoteOpen from "../../../../../images/all/icon-pboard-open.svg";
//import NoteClose from "../../../../../images/all/icon-pboard-close.svg";
//import IconExcel from "../../../../../images/all/icon-excel-24-px.svg";
import NoteSearch from '../NoteSearch';


class NoteAllShow extends Component {
    contextRef = createRef()
    state = {activeItem: 'NoteAll'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div ref={this.contextRef}>
                <div className="cont-inner">
                    <Menu className="note-tab">
                        <Menu.Item
                            name='NoteAll'
                            active={activeItem === 'NoteAll'}
                            onClick={this.handleItemClick}
                            as={Link} to=""
                        >
                            모아보기
                        </Menu.Item>
                        <Menu.Item
                            name='NoteFolder'
                            active={activeItem === 'NoteFolder'}
                            onClick={this.handleItemClick}
                            as={Link} to=""
                        >
                            폴더보기
                        </Menu.Item>
                        
                    </Menu>
                </div>

                <Segment className='full'>
                    {/* 노트 검색 */}
                    <NoteSearch />



                    <div className="total_box">
                        <span>총 <strong>0개의 Note</strong></span>    
                    </div>

                    
                    <NoteAllNodata />
                </Segment>
            </div>
        )
    }
}


export default NoteAllShow
