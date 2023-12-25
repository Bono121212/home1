import React, {Component} from 'react'
import { Icon, Button, Popup } from 'semantic-ui-react'

import '../../UserLayoutOldV3/UserLayoutOldV3.css';
import classNames from 'classnames';

class GsearchField extends Component {
    
    state = {activeItem: '', focus: false, write: '', writeState:false};

    render () {
        
        return (
            <div className="search_area">
                <div className="search_inner">
                    {/* 검색어 입력필드 */}
                    <div className="field">
                        <div className="search_input">
                            <Popup
                                on='focus'
                                postion='bottom center'                
                                className="history_popup"                            
                                trigger={                              
                                        <div className={classNames("ui search show_text input", { 
                                            focus: this.state.focus,
                                            write: this.state.write,
                                            on:this.state.focus // input모양이 popup에 맞춰서 변경됨
                                        })}>
                                            <input type="text" placeholder="검색어를 입력하세요."
                                                value={this.state.write}
                                                onClick={() => this.setState({focus: true})}
                                                onBlur={() => this.setState({focus: false})}
                                                onChange={(e) => this.setState({write: e.target.value})}
                                            />
                                            <i aria-hidden="true" className="clear link icon"
                                            onClick={() => this.setState({write: ''})}/>
                                            <i aria-hidden="true" className="search_i icon"/>
                                        </div>
                                        }
                                content={
                                    <div className="s_history_pop">
                                        <div className="history_wrapper">
                                            <ul>
                                                <li className="h_item">
                                                    <div href="#" className="kwd">
                                                        <span className="li_fix">AI 인공지능 뽀개기</span>
                                                    </div>
                                                    <Icon className="etc li_delete"/>
                                                </li>
                                                <li className="h_item">
                                                    <div href="#" className="kwd">
                                                        <span className="li_fix">ai 인공</span>
                                                    </div>
                                                    <Icon className="etc li_delete"/>
                                                </li>
                                                <li className="h_item">
                                                    <div href="#" className="kwd">
                                                        <span className="li_fix">데이터 사이언스</span>
                                                    </div>
                                                    <Icon className="etc li_delete"/>
                                                </li>
                                                <li className="h_item">
                                                    <div href="#" className="kwd">
                                                        <span className="li_fix">데이터</span>
                                                    </div>
                                                    <Icon className="etc li_delete"/>
                                                </li>
                                                <li className="h_item">
                                                    <div href="#" className="kwd">
                                                        <span className="li_fix">파이썬</span>
                                                    </div>
                                                    <Icon className="etc li_delete"/>
                                                </li>
                                            </ul>
                                            <div className="bottom_clear">
                                                <Button Icon className="clear_all"><Icon className="history_clear_all"/>전체 삭제</Button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    {/* 인기검색어 */}
                    <div className="search_chart field">
                        <div className="s_chart_wrap">
                            <strong className="s_title">인기 검색어</strong>
                            <div className="s_chart_lst">
                                <ul>
                                    <li className="d_item"><strong className="data_num">1</strong><span className="ellipsis data_name">AI</span></li>
                                    <li className="d_item"><strong className="data_num">2</strong><span className="ellipsis data_name">인공지능</span></li>
                                    <li className="d_item"><strong className="data_num">3</strong><span className="ellipsis data_name">DT</span></li>
                                    <li className="d_item"><strong className="data_num">4</strong><span className="ellipsis data_name">디지털 트랜스포메이션</span></li>
                                    <li className="d_item"><strong className="data_num">5</strong><span className="ellipsis data_name">Digital Transformation</span></li>
                                    <li className="d_item"><strong className="data_num">6</strong><span className="ellipsis data_name">행복의 비결</span></li>
                                    <li className="d_item"><strong className="data_num">7</strong><span className="ellipsis data_name">SV</span></li>
                                    <li className="d_item"><strong className="data_num">8</strong><span className="ellipsis data_name">파이썬</span></li>
                                    <li className="d_item"><strong className="data_num">9</strong><span className="ellipsis data_name">Hello, Python</span></li>
                                    <li className="d_item"><strong className="data_num">10</strong><span className="ellipsis data_name">가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GsearchField;