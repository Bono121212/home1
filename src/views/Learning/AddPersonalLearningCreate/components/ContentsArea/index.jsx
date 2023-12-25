import React, {Component, createRef} from 'react'
import {
    Icon, Select, Grid, Input, Button
} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ClearInputBox from "../ClearInputBox";
import URLClearInputBox from "../URLClearInputBox";
import CategorySelection from "../CategorySelection";


const selectOptions01 = [
    {key: 'Classroom', value: 'Classroom', text: 'Classroom'},
    {key: 'e-learning', value: 'e-learning', text: 'e-learning'},
    {key: 'Video', value: 'Video', text: 'Video'},
    {key: 'Audio', value: 'Audio', text: 'Audio'},
    {key: 'Webpage', value: 'Webpage', text: 'Webpage'},
    {key: 'Experiential', value: 'Experiential', text: 'Experiential'},
    {key: 'Document', value: 'Document', text: 'Document'},
    {key: 'Community', value: 'Community', text: 'Community'},
    {key: 'Test', value: 'Test', text: 'Test'}
];

// const selectOptions02 = [
//     {key: 'a', value: 'a', text: 'a'},
//     {key: 'b', value: 'b', text: 'b'}
// ];

class ContentsArea extends Component {
    state = {
        focus: false,
        write: '',
        learningType: ''
    };

    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };

    onChangeLearningType = (e, { value }) => this.setState({ learningType: value })

    contextRef = createRef()

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const { learningType } = this.state;

        return (
            <div className="ui full segment">

                <div className="apl-form-wrap">
                    <form className="ui form">
                        <div className="field">
                            <label className="necessary">강좌명</label>
                            <ClearInputBox/>
                        </div>

                        <div className="field">
                            <label className="necessary">학습유형</label>
                            <div className="select-box">
                                <Select
                                    placeholder='선택해주세요'
                                    className='dropdown w302 selection'
                                    options={selectOptions01}
                                    onChange={this.onChangeLearningType}
                                />
                            </div>
                            {learningType === 'etc' &&
                                <div className="ui input write">
                                    <input type="text" placeholder="직접 입력하세요."/>
                                </div>
                            }
                        </div>

                        {/*0701 Channel Select -> Category로 변경*/}
                        <div className="field">
                            <label className="necessary">카테고리</label>
                            <CategorySelection/>
                            {/*<div className="select-box">*/}
                                {/*<Select*/}
                                    {/*placeholder='선택해주세요'*/}
                                    {/*className='dropdown w302 selection'*/}
                                    {/*options={selectOptions02}*/}
                                {/*/>*/}
                            {/*</div>*/}
                        </div>

                        <div className="field">
                            <label className="necessary">기간</label>
                            <Grid className="due">
                                <Grid.Column>
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
                                                dateFormat='yyyy.MM.d'
                                            />
                                            <Icon className="calendar24 icon"/><span className="blind">date</span>
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
                                                dateFormat='yyyy.MM.d'
                                            />
                                            <Icon className="calendar24 icon"/><span className="blind">date</span>
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <Icon className='info16'/><span className="blind">infomation</span>
                                        일일 강좌 등록 시 시작일과 종료일의 날짜를 동일하게 설정해 주시기 바랍니다.
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="time-wrap">
                                        <div className="time">
                                            <div className="ui h48 input time">
                                                <input type="text" />
                                                <label>시간</label>
                                                <Icon className="clear link" />
                                            </div>
                                        </div>
                                        <div className="time">
                                            <div className="ui h48 input time">
                                                <input type="text" />
                                                <label>분</label>
                                                <Icon className="clear link"/>
                                            </div>
                                        </div>
                                        <div className="info-text">
                                            <Icon className="info16"/>
                                            소요시간은 100시간 이상, 1분 이내는 등록할 수 없습니다.
                                        </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </div>

                        {/*0701 승인자 등록 UI 추가*/}
                        <div className="field">
                            <label className="necessary">승인자 등록</label>
                            <div className="ui w624 action input">
                                <Input type="text" placeholder="승인자를 등록해주세요." readOnly />
                                <Icon className="clear link"/>
                                <Button content="승인자 찾기"/>
                            </div>
                        </div>

                        {/*<Divider className="header" />*/}
                        {/*Additional Input*/}

                        <div className="field">
                            <label className="necessary">강좌설명</label>
                            <div className="ui right-top-count input">
                                <span className="count"><span className="now">0</span>/<span className="max">500</span></span>
                                <textarea placeholder="500자 이내로 입력하세요."/>
                                <span className="validation">500자 이내로 입력하세요.</span>
                            </div>
                        </div>

                        <div className="field">
                            <label>URL</label>
                            <URLClearInputBox/>
                        </div>

                        <div className="field">
                            <label>첨부파일</label>
                            <div className="ui w624 input file">
                                <Input type="text" placeholder="첨부파일을 등록해주세요." readOnly />
                                <Icon className="clear link"/>
                                <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                <input type="file" id="hidden-new-file" />
                            </div>
                        </div>



                        <div className="buttons">
                            <button className="ui button fix line">취소</button>
                            <button className="ui button fix bg">승인요청</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default ContentsArea
