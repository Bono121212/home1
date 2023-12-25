import React, {Component, createRef} from 'react';
import { Segment, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
//import Calendar from '../Calendar';
import NoteFolderNodata from '../NoteFolderNodata';
import NoteFolderArea2 from '../NoteFolderArea2';

//import NoteOpen from "../../../../../images/all/icon-pboard-open.svg";
//import NoteClose from "../../../../../images/all/icon-pboard-close.svg";
//import IconExcel from "../../../../../images/all/icon-excel-24-px.svg";
  
class NoteFolderShow extends Component {
    contextRef = createRef()
    state = {activeItem: 'NoteFolder'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    
    handleNote = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ?  activeIndex - 1: index;
        this.setState({ activeIndex: newIndex });
    };
    
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
                    {/* 폴더 영역 */}
                    <NoteFolderArea2 />



                    <div className="total_box">
                        총 <strong>0개의 Note</strong>
                    </div>


                    <NoteFolderNodata />
                    
                </Segment>
            </div>
        )
    }
}


export default NoteFolderShow
