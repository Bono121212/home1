import React, {Component} from 'react'
import {
    Segment, Form, Icon, Select
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import Editor from "../../../../Editor";
import FAQRadio from "../FAQRadio";

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '학습문의'},
    {key: 'val02', value: 'val02', text: '이수시간'},
    {key: 'val03', value: 'val03', text: '회원정보'},
    {key: 'val04', value: 'val04', text: '결제, 환불'},
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
                                <input type="text" placeholder="제목을 입력해주세요." value="SK그룹이 구성원들의 딥체인지 역량을 키워나갈 교육·연구 통합 플랫폼인 'SK University'를 출범시킨다." />
                                {/* 입력값이 있을경우 아이콘 활성화 되야함.... */}
                                <Icon className='clear link'/>
                                <span className="validation">You can enter up to 100 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>FAQ 카테고리</label>
                            <div className="select-box">
                                <Select placeholder='선택해주세요' className='dropdown selection'
                                        options={selectOptions01}/>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>FAQ 구분</label>
                            <FAQRadio/>
                        </Form.Field>
                        <Form.Field>
                            <label>본문</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>
                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
