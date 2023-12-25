import React, {Component} from 'react'
import { Icon, Button, Popup, Input, Checkbox } from 'semantic-ui-react'
import classNames from 'classnames';
import SidePopular from '../SidePopular';


class GsearchField extends Component {

    state = {activeItem: '', focus: false, write: '', isOpen : false, isChecked: false};

    handleOpen = () => {this.setState({ isOpen: true })}
    handleClose = () => {this.setState({ isOpen: false })}
    handleChange = (e,{checked}) => {this.setState({ isChecked : checked})}


    render () {

        return (
            <div className="search_area">
                <div className="search_inner">
                    {/* 검색어 입력필드 */}
                    <div className="field">
                        <div className="search_input">
                            <Popup
                                on='write'
                                postion='left bottom'
                                className="history_popup navi_popup"
                                positionFixed
                                open={this.state.isOpen}
                                onOpen={this.handleOpen}
                                onClose={this.handleClose}
                                trigger={
                                    <div className={classNames("search show_text", {
                                        focus: this.state.focus,
                                        write: this.state.write,
                                        on: this.state.isOpen === true,//input이 popup에 맞춰서 모양이 변경됨
                                        research : this.state.isChecked === true //결과내 재검색 체크박스 클릭시, reseach 클래스 추가 .re_text display제어
                                    })}>
                                        <div className="re_text"><span className="ellipsis">데이터</span></div>
                                        <Input type="text"
                                                placeholder="검색어를 입력하세요."
                                                onChange={(e) => this.setState({write: e.target.value})}
                                                onClick={() => this.setState({focus: true})}
                                                //value="분석"
                                            />
                                        <Icon
                                            className="clear link"
                                            onClick={() => this.setState({write: ''})}
                                        />
                                        {/* <Icon className="search_i"/> */}
                                        <Button className="btn_sch"><Icon className="search_i"/></Button>
                                    </div>
                                }
                            >
                                <Popup.Content>
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

                                </Popup.Content>
                            </Popup>
                        </div>
                    </div>
                    <Checkbox
                        className="again_chk"
                        label="결과 내 재검색"
                        checked={this.state.isChecked}
                        onClick={this.handleChange}
                    />
                </div>
            </div>

        )
    }
}

export default GsearchField;