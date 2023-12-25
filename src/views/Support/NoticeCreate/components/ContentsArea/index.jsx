import React, {Component} from 'react'
import {Segment, Container, Form, Select, Input, TextArea, Checkbox, Divider} from 'semantic-ui-react'
import ButtonGroup from '../ButtonGroup'
import Editor from "../../../../Editor";

class ContentsArea extends Component {
    render() {
        return (

            <Segment attached padded>
                <Container>
                    <Form>
                        <Form.Field>
                            <Checkbox label='주요 공지사항'/>
                        </Form.Field>
                        <Form.Field label='제목' fluid control={Input} placeholder='제목을 입력해주세요.'/>
                        <Editor/>
                        <Form.Input width={8} label='첨부 파일' action={'File'} placeholder='7Mbyte 이하의 문서 및 이미지 파일, 압축 파일만 업로드 가능합니다.
'/>
                    </Form>
                    <Divider/>
                    <ButtonGroup/>
                </Container>
            </Segment>
        )
    }
}


export default ContentsArea
