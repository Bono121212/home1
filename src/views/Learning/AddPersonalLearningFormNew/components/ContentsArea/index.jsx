import React, {Component, createRef} from 'react'
import {
    Grid,
    Icon,
    Select,
} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import classNames from "classnames";
import ClearInputBox from "../ClearInputBox";
// import URLClearInputBox from "../URLClearInputBox";
// import RectIcon from "../RectIcon";


const selectOptions01 = [
    {key: 'Classroom', value: 'Classroom', text: 'Classroom'},
    {key: 'e-learning', value: 'e-learning', text: 'E-learning'},
    {key: 'Video', value: 'Video', text: 'Video'},
    {key: 'Audio', value: 'Audio', text: 'Audio'},
    {key: 'Community', value: 'Community', text: 'Community'},
    {key: 'Webpage', value: 'Webpage', text: 'Webpage'},
    {key: 'Document', value: 'Document', text: 'Document'},
    {key: 'Experiential', value: 'Experiential', text: 'Experiential'},
    {key: 'Test', value: 'Test', text: '기타-직접입력'},
];
const selectOptions02 = [ {key : 'SK㈜_C&C', value : 'SK㈜_C&C',text :'SK㈜_C&C'},]
const selectOptions03 = [
    {key : 'SK C&C 공통', value : 'SK C&C 공통', text :'SK C&C 공통'},
    {key : 'Industry', value : 'Industry', text :'Industry'},
    {key : 'Leadership', value : 'Leadership', text :'Leadership'},
    {key : 'Marketing', value : 'Marketing', text :'Marketing'},
    {key : 'Sales', value : 'Sales', text :'Sales'},
    {key : 'Consulting', value : 'Consulting', text :'Consulting'},
]

class ContentsArea extends Component {
    state = {focus: false, write: ''};

    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date
        });
    };

    contextRef = createRef()

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div className="ui full segment">

                <div className="apl-form-wrap">
                    <form className="ui form">
                        <div className="field">
                            <label className="necessary">교육명</label>
                            <ClearInputBox/>
                        </div>
                        <div className="field">
                            <label className="necessary">교육형태</label>
                            <div className="edu-wrap">
                                <Select placeholder='Select' className='dropdown w302 selection'
                                        options={selectOptions01}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="necessary">Category / Channel</label>
                            <Select placeholder='Select' className='dropdown w302 selection mr15px' options={selectOptions02}/>
                            <Select placeholder='Select' className='dropdown w302 selection ml18' options={selectOptions03}/>

                        </div>

                        <div className="field">
                            <label className="necessary">교육기간</label>
                            <div className="ui grid due">
                                <div className="column">
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
                                </div>
                                {/* <div className="column">
                                    <div className="ui input time">
                                        <input type="text"/><label>h</label>
                                    </div>
                                    <div className="ui input time">
                                        <input type="text"/><label>m</label>
                                    </div>
                                    <div className="info-text"><i className="info16 icon"><span
                                        className="blind">infomation</span></i>소요시간은 100시간 이상, 1분 이내는 등록할 수 없습니다.
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="field">
                            <label className="necessary">교육기관</label>
                            <div className="ui right-top-count input">
                                <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
                                <input id="institute" type="text" placeholder="교육을 수료한 기관명을 입력해주세요." />
                                <Icon className='clear link'/>
                                <span className="validation">최대 100자까지 입력 가능합니다.</span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="necessary">교육시간</label>
                            <div className="time-wrap">
                                <div className="time">
                                    <div className="ui h48 input time">
                                        <input id="requestHour" type="text" min="0" value="0"/>
                                        <label>시간</label><Icon className="clear link"/>
                                    </div>
                                </div>
                                <div className="time">
                                    <div className="ui h48 input time">
                                        <input id="requestMinute" type="text" min="0" value="0"/>
                                        <label>분</label><Icon className="clear link"/>
                                    </div>
                                </div>
                                <div className="info-text">
                                    <Icon className="icon info16"/><span className="blind">infomation</span>학습시간으로 인정되는 교육시간을 입력해주세요.<br/>
                                    <Icon className="icon info16"/><span className="blind">infomation</span>교육시간은 100시간 이상, 1분 이내는 등록할 수 없습니다.<br/>
                                    <Icon className="icon info16"/><span className="blind">infomation</span>승인자에 의해 교육시간은 변경될 수 있습니다.
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label className="necessary">교육내용</label>
                            <div className="ui form">
                                <div className="ui right-top-count write input">
                                    <span className="count"><span className="now">0</span>/<span className="max">1000</span></span>
                                    <textarea id="content" type="text" placeholder="교육내용을 1,000자 이내로 입력해주세요." rows="3"></textarea>
                                    <span className="validation">최대 1000자 까지 입력 가능합니다.</span>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label>첨부파일</label>
                            <div className="lg-attach">
                                <div className="attach-inner">
                                    <div className='ui segment' style={{border :'0.1rem', padding : 0}}>
                                        <div className="ui inverted dimmer">
                                            <div className="content">
                                                <div className="ui medium text loader">Waiting</div>
                                            </div>
                                        </div>
                                        <div className="content-scroll">
                                            <div className="ui basic vertical segment">
                                                <div className="ui small header text-grey">
                                                    <div className="fl-right">
                                                        <div className="icon-file-upload">
                                                            <label for="app-icon-uploadfileBox1"><span className="ui text blue"><i className="material-icons">add</i></span><span className="sr-only"></span><input type="file" id="app-icon-uploadfileBox1"/></label>
                                                        </div>
                                                    </div>
                                                    <i className="material-icons">attach_file</i> 첨부파일
                                                </div>
                                                <div className="ui segment side-segment-list">
                                                    <div role="list" className="ui middle aligned list"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom"><span className="text1"><Icon className="info16"/><span className="blind">information</span>DOC,PPT,PDF,EXL 파일을 등록하실 수 있습니다. / 1개 이상의 첨부파일을 등록하실 수 있습니다.</span></div>
                                </div>
                            </div>
                        </div>


                        <div className="field">
                            <Grid className='create create2'>
                                <Grid.Column>
                                    <label>승인자</label>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="actions"><span className="text1"><b>김서니</b><span className="ml40">SK주식회사 C&amp;C</span><span className="line">CV Digital그룹</span></span></div>
                                </Grid.Column>
                            </Grid>
                        </div>

                        {/*  // .Additional input  */}
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
