import React, { Component } from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'

import AgreeCheckRadio from '../AgreeCheckRadio'
class PolicyModal extends Component {
    state = { open: true };
    show = size => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false });

    stateRaio = { value: 'radio01' }
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { open, size } = this.state;
        return (
            <>
                <Modal size={size} open={open} onClose={this.close} className='base w760 popup_info'>

                    <Modal.Header>
                        <strong>외부교육 개인 정보 제공 동의</strong>
                        <span>개인정보 제공 동의 여부를 체크해주세요.</span>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="info_inner">
                            <p className="info_txt1">
                                {/* Linked In
                                <br/>  */}
                                교육 수강을 위해 외부 기간에 하기 정보를 제공하는 것에 동의 하십니까?
                            </p>
                            <p className="info_txt2">※ 정보 제공 미동의 시 교육 수강이 불가합니다.</p>
                            <div className="info_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>제공 받는 자</th>
                                            <th>제공받는 자의 이용 목적</th>
                                            <th>제공하는 항목</th>
                                            <th>보유 및 이용기간</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Linked In</td>
                                            <td>학습자 SSO 접속 <br />학습이수 현황</td>
                                            <td>소속, 성명, 이메일</td>
                                            <td>퇴사 시 또는 <br />회원가입 탈퇴 시</td>
                                        </tr>
                                        <tr>
                                            <td>휴먼솔루션그룹(HSG)</td>
                                            <td>학습자 SSO 접속 <br />학습이수 현황</td>
                                            <td>소속, 성명, 이메일</td>
                                            <td>퇴사 시 또는 <br />회원가입 탈퇴 시</td>
                                        </tr>
                                        <tr>
                                            <td>SK Inc</td>
                                            <td>학습자 SSO 접속 <br />학습이수 현황</td>
                                            <td>소속, 성명, 이메일</td>
                                            <td>퇴사 시 또는 <br />회원가입 탈퇴 시</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="info_chk">
                                    <AgreeCheckRadio />
                                </div>
                                <div className="info_noti"><i className="ico"></i> 개인정보 제공 동의 여부를 체크해주세요.</div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions3">
                        <Button className='b_cancel' onClick={this.close}>취소</Button>
                        <Button className='b_chk' onClick={this.close}>확인</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default PolicyModal;
