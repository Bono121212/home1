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
                            <div className={classNames("ui search show_text input", { 
                                focus: this.state.focus,
                                write: this.state.write
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