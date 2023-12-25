import React, {Component} from 'react'
import {
    Segment, Form, Icon, Select
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import Editor from "../../../../Editor";
// import ActionButtons from "../ButtonGroup";

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '학습문의'},
    {key: 'val02', value: 'val02', text: '이수시간'},
    {key: 'val03', value: 'val03', text: '회원정보'},
    {key: 'val04', value: 'val04', text: '결제환불'},
    {key: 'val05', value: 'val05', text: '기타'},
];

class ContentsArea extends Component {
    render() {
        return (
            <Segment className='full'>
                <div className="apl-form-wrap support">
                    <Form>
                        <Form.Field>
                            <label>제목</label>
                            <div className="ui right-top-count input">{/* .error */}
                                <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
                                <input type="text" placeholder="제목을 입력해주세요." value='입력된 제목'/>
                                {/* 입력값이 있을경우 아이콘 활성화 됨. */}
                                <Icon className='clear link'/>
                                <span className="validation">You can enter up to 100 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>문의유형</label>
                            <div className="select-box">
                                <Select placeholder='분류를 선택해주세요' className='dropdown selection'
                                        options={selectOptions01} defaultValue={selectOptions01[1].value}/>
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
                                        <Editor/>
                            {/*        <textarea placeholder="1000자 이내로 입력하세요."*/}
                            {/*                  value='앱 디자인 및 설계에 필요한 UX UI론, 모바일 앱 구분, 모바일 앱 해상도, 나인패치, 앱 컬러, 아이콘 등 실제 앱 디자인에 필요한기술 위주의 내용으로 앱 디자인에 필요한 다양한 기술적인 접근방식으로 앱 디자인 실무에 필요한 스킬위주의 강좌입니다.앱 디자인 및 설계에 필요한 UX UI론, 모바일 앱 구분, 모바일 앱 해상도, 나인패치, 앱 컬러, 아이콘 등 실제 앱 디자인에 필요한기술 위주의 내용으로 앱 디자인에 필요한 다양한 기술적인 접근방식으로 앱 디자인 실무에 필요한 스킬위주의 강좌입니다.'/>*/}
                                        <span className="validation">You can enter up to 1000 characters.</span>
                                    </div>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>첨부파일</label>
                            <Form>
                                <div className="ui input file">
                                    <input type="text" readOnly/>
                                    <Icon className='clear link'/>
                                    <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                    <input type="file" id="hidden-new-file"/>
                                </div>
                            </Form>
                        </Form.Field>
                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
