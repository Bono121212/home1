import React from 'react'
import {Segment, Container, Form, Select, Input, TextArea, Divider} from 'semantic-ui-react'
import ButtonGroup from '../ButtonGroup'

const questionType = [
    {key: '1', text: '학습문의', value: '학습문의'},
    {key: '2', text: '이수시간', value: '이수시간'},
    {key: '3', text: '회원정보', value: '회원정보'},
    {key: '4', text: '결제환불', value: '결제환불'},
    {key: '4', text: '기타', value: '기타'},
];

const ContentsArea = () => (
    <>
        <Segment attached padded>
            <Container>
                <Form>
                    <Form.Field width={6} label='문의 유형' control={Select} placeholder='Select' options={questionType}/>
                    <Form.Field label='제목' fluid control={Input} placeholder='제목을 입력해주세요.'/>
                    <Form.Field
                        control={TextArea}
                        label='내용'
                        placeholder='1000자 이내로 입력하세요.'
                        rows={10}
                    />
                    <Form.Input width={8} label='첨부 파일' action={'File'} placeholder='7Mbyte 이하의 문서 및 이미지 파일, 압축 파일만 업로드 가능합니다.
'/>
                </Form>
                <Divider/>
                <ButtonGroup/>
            </Container>
        </Segment>
    </>
);

export default ContentsArea
