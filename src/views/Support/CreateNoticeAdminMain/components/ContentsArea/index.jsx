import React, {Component} from 'react'
import {
    Segment, Form, Icon
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import Editor from "../../../../Editor";
// import ActionButtons from "../ButtonGroup";
import NoticeRadio from "../NoticeRadio";

class ContentsArea extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Segment className='full'>
                <div className="apl-form-wrap support">
                    <Form>
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
                            <label>공지 구분</label>
                            <NoticeRadio/>
                        </Form.Field>
                        <Form.Field>
                            <label>본문</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>첨부파일</label>
                            <div className="ui form">
                                <div className="ui w624 input file">
                                    <input type="text" readOnly placeholder="파일을 업로드 가능합니다."/>
                                    <Icon className='clear link'/>
                                    <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                    <input type="file" id="hidden-new-file"/>
                                </div>
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
