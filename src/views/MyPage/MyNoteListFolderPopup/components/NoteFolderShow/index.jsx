import React, {Component, createRef} from 'react';
import { Segment, Menu, Icon, Image, Button, Accordion } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
//import Calendar from '../Calendar';
import NoteTitle from '../NoteTitle';
import NoteContent from '../NoteContent';
import NoteFolderArea from '../NoteFolderArea';
import FolderSetting from '../FolderSetting';

import NoteOpen from "../../../../../images/all/icon-pboard-open.svg";
import NoteClose from "../../../../../images/all/icon-pboard-close.svg";
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
        const { activeIndex } = this.state;
        
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
                    <NoteFolderArea />



                    {/* 설정버튼 누르기 전 */}
                    <div className="total_box">
                        <strong className="tit_folder">
                            시험대비 벼락치기 폴더 
                            <Button className="btn_setting"><Icon /></Button>
                        </strong>
                        총 <strong>13개의 Note</strong>
                    </div>


                    
                    {/* 설정버튼 누르기 후 */}
                    <FolderSetting/>



                    {/* 노트 영역 */}
                    <div className="note_area">
                        {/* 노트 타이틀 */}
                        <NoteTitle />



                        {/* 노트 펼치기/숨기기 */}
                        <Accordion>
                            <Accordion.Title
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handleNote}
                            >
                                <Image src={activeIndex !== 1 ? NoteClose : NoteOpen} alt="더보기"/>
                            </Accordion.Title>

                            <Accordion.Content active={activeIndex === 1}>
                                {/* 노트 보기 및 작성 */}
                                <NoteContent />

                            </Accordion.Content>
                        </Accordion>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default NoteFolderShow
