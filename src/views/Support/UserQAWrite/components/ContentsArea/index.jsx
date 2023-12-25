import React, {Component} from 'react'
import {
    Segment, Form, Icon, Select, Button
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import AttachFileUpload from "../AttachFileUpload";
import UserQAWriteModalFaq from "../../../UserQAWriteModalFaq";

const selectOptionsFAQ = [
    {key: '', value: '', text: '전체'},
    {key: '', value: '', text: '학습 Rule'},
    {key: '', value: '', text: 'Contents'},
    {key: '', value: '', text: 'System'},
    {key: '', value: '', text: 'College'}
]

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '학습문의'},
    {key: 'val02', value: 'val02', text: '이수시간'},
    {key: 'val03', value: 'val03', text: '회원정보'},
    {key: 'val04', value: 'val04', text: '결제환불'},
    {key: 'val05', value: 'val05', text: '기타'},
];

class ContentsArea extends Component {
    state = {popup: false};

    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }
    render() {
        const { popup } = this.state;

        return (
            <Segment className='full qna-write-content'>

                {popup && <UserQAWriteModalFaq />}
                <div className="apl-form-wrap support">
                    <Form>
                        <Form.Field>
                            <label><span className="label-text">문의 카테고리</span>
                                <Button 
                                    //버튼 클릭시 UserWQWriteModalFaq
                                    //onClick={this.handlePopup} 
                                    className="faq-info"><Icon className="info20"/>혹시 이런 문의일까요?</Button>
                            </label>
                            <div className="select-box">
                                <Select placeholder="Select" className="trig-pop-faq" options={selectOptionsFAQ}/>
                                <Select placeholder='콘텐츠 문의' options={selectOptions01}/>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>제목</label>
                            <div className="ui right-top-count input">{/* .error */}
                                <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
                                <input type="text" placeholder="제목을 입력해주세요."/>
                                {/* 입력값이 있을경우 아이콘 활성화 됨. */}
                                <Icon className='clear link'/>
                                <span className="validation">You can enter up to 100 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>내용</label>
                            <div className="ui editor-wrap">
                                <div className="ui form">
                                    <div className="ui right-top-count input">
                                        <span className="count">
                                            <span className="now">0</span>/<span className="max">1000</span>
                                        </span>
                                        {/* <Editor/> */}
                                        <textarea placeholder="1000자 이내로 입력하세요."/>
                                        {/* <span className="validation">You can enter up to 1000 characters.</span> */}
                                    </div>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>첨부파일</label>

                            <AttachFileUpload/>
                        </Form.Field>
                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
