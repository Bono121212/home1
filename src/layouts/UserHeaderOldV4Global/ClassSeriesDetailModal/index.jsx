import React, { Component, useEffect } from "react";

import { Button, Popup, Icon, Image, Input } from "semantic-ui-react";

import classNames from "classnames";
import BtnSearch from '../../../images/all/icon-gnb-search-36-px.png';
import SidePopular from '../SidePopular';



class ClassSeriesDetailModalB extends Component {
    state = {  activeItem: '', focus: false, write: '', writeState:false , isOpen: false};
  
    handleOpen = () => {this.setState({ isOpen: true })}  
    handleClose = () => {this.setState({ isOpen: false })}
    
    render() {
        return (
            
            <Popup className="popup_gsearch type_b"
                on='click'
                position='bottom right'
                trigger={
                    <Button className="btn_gsearch">
                        <Image src={BtnSearch} className="btn_search b_search" alt="검색버튼"/>
                    </Button>
                }            
                open={this.state.isOpen}
                onOpen={this.handleOpen}
                onClose={this.handleClose}
            >
                <Popup.Header className="gsearch_header">
                    <strong className="h_tit">검색</strong>
                    <div className="close_wrapper">
                        <Button className="close" Icon onClick={this.handleClose}></Button>
                    </div>
                </Popup.Header>
                <Popup.Content>
                    <div className="gsearch_inner">
                        <div className="search_input">
                            {/* 검색어 입력필드 */}                    
                            <div className={classNames("search show_text", { 
                                focus: this.state.focus,
                                write: this.state.write,
                                on: this.state.isOpen === true//input이 popup에 맞춰서 모양이 변경됨
                            })}> 
                                <Input type="text" placeholder="검색어를 입력하세요."
                                    value={this.state.write}
                                    onClick={() => this.setState({focus: true})}
                                    onChange={(e) => this.setState({write: e.target.value})}
                                />
                                <Icon 
                                    className="clear link"
                                    onClick={() => this.setState({write: ''})}
                                />
                                <Button className="btn_sch"><Icon className="search_i"/></Button>
                            </div>
                        </div>
                        {/* 최근검색어 */}
                        <div className="w_area recent_list">
                            <div className="w_header">
                                <strong className="w_tit">최근 검색어</strong>
                                <Button className="all_dt">전체 삭제</Button>
                            </div>
                            <div className="w_contents">
                                <ul>
                                    <li><strong className="rwd">AI 인공지능 뽀개기</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                    <li><strong className="rwd">ai 인공</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                    <li><strong className="rwd">데이터 사이언스</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                    <li><strong className="rwd">데이터</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                    <li><strong className="rwd">파이썬</strong><Button className="w_dl"><Icon className="i_dl"/></Button></li>
                                </ul>

                                {/* 최근 검색어가 없을때, 아래 문구 노출됩니다. */}
                                {/* <p className="txt_nodata">최근 검색어가 없습니다.</p> */}
                            </div>
                        </div>
                        {/* 인기검색어 */}
                        <div className="w_area poplr_list">
                            <div className="w_header">
                                <strong className="w_tit">인기 검색어</strong>
                            </div>
                            <div className="w_contents">
                                <SidePopular />
                            </div>
                        </div>
                    </div>
                </Popup.Content>
            </Popup>
        );
    }
}

export default ClassSeriesDetailModalB;