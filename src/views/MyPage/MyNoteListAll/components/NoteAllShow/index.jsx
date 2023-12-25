import React, {Component, createRef} from 'react';
import { Segment, Menu, Table, Image, Button, Select, Accordion } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Calendar from '../Calendar';
import NoteTitle1 from '../NoteTitle1';
import NoteTitle2 from '../NoteTitle2';
import NoteContent1 from '../NoteContent1';
import NoteContent2 from '../NoteContent2';
import ClearInputBoxSearch from '../ClearInputBoxSearch';

import NoteOpen from "../../../../../images/all/icon-pboard-open.svg";
import NoteClose from "../../../../../images/all/icon-pboard-close.svg";
import IconExcel from "../../../../../images/all/icon-excel-24-px.svg";


class NoteAllShow extends Component {
    contextRef = createRef()
    state = {activeItem: 'NoteAll'}

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

        const CategoryOptions = [
            { key: '전체전체전체전체전체전체전체전체', value: '전체전체전체전체전체전체전체전체', text: '전체전체전체전체전체전체전체전체' },
            { key: '카테1카테1카테1카테1카테1', value: '카테1카테1카테1카테1카테1', text: '카테1카테1카테1카테1카테1' },
        ]
        const CategoryOptionsDetail = [
            { key: 'AI Trend Watch', value: 'AI Trend Watch', text: 'AI Trend Watch' },
            { key: '카테1', value: '카테1', text: '카테1' },
        ]
        const SearchOptions = [
            { key: '전체', value: '전체', text: '전체' },
            { key: '카테1', value: '카테1', text: '카테1' },
        ]

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
                    <div className="search_box">
                        <Table>
                           
                            <Table.Body>
                                <Table.Row>
                                    <Table.HeaderCell>가입일자</Table.HeaderCell>
                                    <Table.Cell> <Calendar /> </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.HeaderCell>Category</Table.HeaderCell>
                                    <Table.Cell>
                                        <div className="option_box">
                                            <Select placeholder="전체전체전체전체전체전체전체전체"  options={CategoryOptions} />
                                        </div>
                                        <div className="option_box">
                                            <Select className="option_detail" placeholder="AI Trend Watch"  options={CategoryOptionsDetail} />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.HeaderCell>검색어</Table.HeaderCell>
                                    <Table.Cell>
                                        <div className="option_box">
                                            <Select placeholder="전체"  options={SearchOptions} />
                                        </div>
                                        <ClearInputBoxSearch />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>   
                    </div>

                    <div className="total_box">
                        <span className="tit_cnt">총 <strong>13개의 학습과정</strong></span>
                        <span className="tit_cnt">총 <strong>2개의 Note</strong></span>  
                        <Button className="btn_download"><Image src={IconExcel} alt="엑셀아이콘"/>전체 Note 다운로드</Button>
                    </div>

                    {/* 노트 영역 */}
                    {/* <div className="note_area">
                        노트 타이틀
                        <NoteTitle1 />

                        노트 보기 및 작성
                        <NoteContent1 />
                    </div> */}

                    {/* 노트 영역 */}
                    <div className="note_area">
                        {/* 노트 타이틀 */}
                        <NoteTitle1 />

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
                                <NoteContent1 />

                            </Accordion.Content>
                        </Accordion>
                    </div>

                    {/* 노트 영역 */}
                    <div className="note_area">
                        {/* 노트 타이틀 */}
                        <NoteTitle2 />

                        {/* 노트 펼치기/숨기기 */}
                        <Accordion>
                            <Accordion.Title
                                active={activeIndex === 2}
                                index={2}
                                onClick={this.handleNote}
                                >
                                <Image src={activeIndex !== 2 ? NoteClose : NoteOpen} alt="더보기"/>
                            </Accordion.Title>

                            <Accordion.Content active={activeIndex === 2}>

                                {/* 노트 보기 및 작성 */}
                                <NoteContent2 />

                            </Accordion.Content>
                        </Accordion>
                    </div>

                </Segment>
            </div>
        )
    }
}


export default NoteAllShow
