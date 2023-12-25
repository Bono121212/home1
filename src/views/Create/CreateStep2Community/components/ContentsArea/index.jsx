import React, {Component} from 'react'
import {
    Segment, Form, Radio, Select, Step, Grid
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import CommunityType from "../CommunityType";
import ClearInputBox from "../ClearInputBox";
import ClearInputBox01 from "../ClearInputBox01";
//import AttachFileUpload from "../AttachFileUpload";
import Editor from "../../../../Editor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: 'Basic'},
    {key: 'val02', value: 'val02', text: 'Intermediate'},
    {key: 'val03', value: 'val03', text: 'Advanced'},
    {key: 'val04', value: 'val04', text: 'Export'},
];
const selectOptions02 = [
    {key: 'val01', value: 'val01', text: '교육기관1'},
    {key: 'val02', value: 'val02', text: '교육기관2'},
    {key: 'val03', value: 'val03', text: '교육기관3'},
    {key: 'val04', value: 'val04', text: '교육기관4'},
    {key: 'val05', value: 'val05', text: '직접입력'},
];

class ContentsArea extends Component {
    state = {
        value: 'value01'
        // startDate: new Date(),
        // endDate: new Date(),
    };

    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };

    handleChange = (e, {value}) => this.setState({value})

    render() {

        return (
            <Segment className='full'>
                <div className="apl-form-wrap create">
                    <Form>
                        <div className="section-tit">
                            <span className="text1">교육정보</span>
                            <div className="right-step">
                                <Step.Group className='number-step'>
                                    <Step completed>
                                        <Step.Content>
                                            <span className="number"><span className="blind">1</span></span>
                                            <Step.Title>기본정보 및 노출정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                    <Step active>
                                        <Step.Content>
                                            <span className="number"><span className="blind">2</span></span>
                                            <Step.Title>교육정보 및 부가정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </div>
                        </div>

                        <Form.Field>
                            <label className="necessary">교육목표</label>
                            <div className="ui form">
                                <div className="ui right-top-count input">
                                    {/* .error // */}
                                    <span className="count"><span className="now">0</span>/<span
                                        className="max">500</span></span>
                                    <textarea placeholder="교육 목표를 입력해주세요. (최대 500자 입력 가능)"/>
                                    <span className="validation">You can enter up to 500 characters.</span>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label className="necessary">교육대상</label>
                            <div className="ui right-top-count input">
                                {/* .error // */}
                                <span className="count"><span className="now">0</span>/<span
                                    className="max">500</span></span>
                                <textarea placeholder="교육 대상을 입력해주세요. (최대 500자 입력가능)"/>
                                <span className="validation">You can enter up to 500 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label className="necessary">교육내용</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label>이수조건</label>
                            <div className="ui right-top-count input">
                                {/* .error // */}
                                <span className="count"><span className="now">0</span>/<span
                                    className="max">1000</span></span>
                                <textarea placeholder="이수조건을 입력해주세요."/>
                                <span className="validation">You can enter up to 1000 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>기타안내</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui grid create">
                                <div className="column">
                                    <label className="necessary">교육시간</label>
                                    <ClearInputBox/>
                                    <ClearInputBox/>
                                </div>
                                <div className="column">
                                    <label>난이도</label>
                                    <Select placeholder='선택해주세요' className='dropdown'
                                            options={selectOptions01}/>
                                </div>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <div className="ui grid create">
                                <CommunityType/>

                                <div className="column">
                                    <label className="necessary">기간</label>
                                    <div className="ui calendar" id="rangestart">
                                        <div className="ui input right icon">
                                            <label>시작일</label>
                                            {/* TODO! 시작일 종료일 날짜가 같이 바뀜.... */}
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                selectsStart
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                dateFormat='yy.MM.d'
                                            />
                                            <i className="calendar24 icon"><span className="blind">date</span></i>
                                        </div>
                                    </div>
                                    <span className="dash">-</span>
                                    <div className="ui calendar" id="rangeend">
                                        <div className="ui input right icon">
                                            <label>종료일</label>
                                            {/* TODO! 시작일 종료일 날짜가 같이 바뀜.... */}
                                            <DatePicker
                                                selected={this.state.endDate}
                                                onChange={this.handleChange}
                                                selectsEnd
                                                startDate={this.state.endDate}
                                                endDate={this.state.startDate}
                                                dateFormat='yy.MM.d'
                                            />
                                            <i className="calendar24 icon"><span className="blind">date</span></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">교육기관 / 출처</label>
                            <Grid className='create'>
                                <Grid.Column>
                                    <Select placeholder='선택해주세요' className='w100'
                                            options={selectOptions02}/>
                                </Grid.Column>
                                <Grid.Column>
                                    <ClearInputBox01/>
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <hr className="dividing"/>

                        <div className="section-tit">
                            <span className="text1">부가정보</span>
                        </div>

                        <Form.Field>
                            <label className="necessary">학습카드 공개여부</label>
                            <Radio
                                className='base'
                                label='공개'
                                name='radioGroup1'
                                value='value01'
                                checked={this.state.value === 'value01'}
                                onChange={this.handleChange}
                            />
                            <Radio
                                className='base'
                                label='비공개'
                                name='radioGroup1'
                                value='value02'
                                checked={this.state.value === 'value02'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>

                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}

export default ContentsArea
