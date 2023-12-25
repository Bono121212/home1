import React, { Component } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import classNames from 'classnames';

class ContentsArea extends Component{
    state = { focus1 : false, write1 : '', focus2 : false, write2 : '', focus3 : false, write3 : ''};
    render() {
        return(
            <div className="password_chng_contents">
                <div className="left-side">
                    <div className="form-section">
                        <Form>
                            <Form.Field>
                                <label for='input1'>현재 비밀번호</label>
                                <div className={classNames("ui h48 input", { focus: this.state.focus1, write: this.state.write1 })}>
                                    <input
                                        type="text"
                                        id='input1'
                                        placeholder="현재 비밀번호"
                                        value={this.state.write1}
                                        onClick={() => this.setState({ focus1: true })} onBlur={() => this.setState({ focus1: false})}
                                        onChange={(e) => this.setState({ write1: e.target.value })}
                                    />
                                    <Icon className="clear link" onClick={() => this.setState({ write: '' })} />
                                    <div className="making-guide error" style={{"display":"none"}}>
                                        <i class="error16 icon"><span class="blind">error</span></i>
                                        <span class="passwordReset_12">현재 비밀번호를 입력해 주세요.</span>
                                    </div>
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>새 비밀번호</label>
                                <div className={classNames("ui h48 input", { focus: this.state.focus2, write: this.state.write2 })}>
                                    <input
                                        type="text"
                                        placeholder="새 비밀번호"
                                        value={this.state.write2}
                                        onClick={() => this.setState({ focus2: true })} onBlur={() => this.setState({ focus2: false})}
                                        onChange={(e) => this.setState({ write2: e.target.value })}
                                    />
                                    <Icon className="clear link" onClick={() => this.setState({ write2: '' })} />
                                    <div className="making-guide error" style={{"display":"none"}}>
                                        <i class="error16 icon"><span class="blind">error</span></i>
                                        <span class="passwordReset_12">새 비밀번호를 입력해 주세요.</span>
                                    </div>
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <div className={classNames("ui h48 input", { focus: this.state.focus3, write: this.state.write3 })}>
                                    <input
                                        type="text"
                                        id='input1'
                                        placeholder="새 비밀번호 확인"
                                        value={this.state.write3}
                                        onClick={() => this.setState({ focus3: true })} onBlur={() => this.setState({ focus3: false})}
                                        onChange={(e) => this.setState({ write3: e.target.value })}
                                    />
                                    <Icon className="clear link" onClick={() => this.setState({ write3: '' })} />
                                    <div className="making-guide error" style={{"display":"none"}}>
                                        <i class="error16 icon"><span class="blind">error</span></i>
                                        <span class="passwordReset_12">새 비밀번호 확인을 입력해 주세요.</span>
                                    </div>
                                </div>
                            </Form.Field>
                        </Form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="form-desc">
                        <h3 className="form-tit"><strong>비밀번호 변경 참고사항</strong></h3>
                        <ul className="form-list">
                            <li className="list-item"><span>비밀번호는 영문자/숫자/특수문자 중</span></li>
                            <li className="list-item"><span>두 가지로 조합할 경우 10자리 이상</span></li>
                            <li className="list-item"><span>세 가지로 조합할 경우 8자리 이상으로 입력해주세요.</span></li>
                            <li className="list-item"><span>최근 사용한 비밀번호 재사용은 불가능합니다.</span></li>
                            <li className="list-item"><span>지금 비밀번호 변경을 원하지 않는 경우, '다음에 변경하기'를 선택해 주세요.</span></li>
                            <li className="list-item"><span>앞으로 6개월 동안 변경 없이 사용 가능합니다.</span></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom_actions">
                    <div className="inner">
                        <Button className="fix bg">비밀번호 변경</Button>
                        <Button className="fix line">다음에 변경하기</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentsArea