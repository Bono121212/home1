import React, {Component, createRef} from 'react'
import {
    Icon,
    Select,
} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import classNames from "classnames";
import ClearInputBox from "../ClearInputBox";
import URLClearInputBox from "../URLClearInputBox";
import RectIcon from "../RectIcon";


const selectOptions01 = [
    {key: 'Classroom', value: 'Classroom', text: 'Classroom'},
    {key: 'e-learning', value: 'e-learning', text: 'e-learning'},
    {key: 'Video', value: 'Video', text: 'Video'},
    {key: 'Audio', value: 'Audio', text: 'Audio'},
    {key: 'Webpage', value: 'Webpage', text: 'Webpage'},
    {key: 'Experiential', value: 'Experiential', text: 'Experiential'},
    {key: 'Document', value: 'Document', text: 'Document'},
    {key: 'Community', value: 'Community', text: 'Community'},
    {key: 'Test', value: 'Test', text: 'Test'},
];

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
                        {/*  .Required input  */}
                        <h4 className="ui dividing header necessary">Required input</h4>
                        <div className="field">
                            <label className="necessary">강좌명</label>
                            <ClearInputBox/>
                        </div>
                        <div className="field">
                            <label className="necessary">학습유형</label>
                            <div className="select-box">
                                <Select placeholder='선택해주세요' className='dropdown w302 selection'
                                        options={selectOptions01}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="necessary">카테고리</label>

                            <div className="ui grid apl">
                                <div className="column">
                                    <div className="header">College</div>
                                    <RectIcon/>
                                </div>
                                <div className="column">
                                    <div className="header">Channel</div>
                                    {/*<div className="default">Collage 선택 시 Channel 항목을 선택할 수 있습니다.</div>*/}

                                    <ul className="channel-list">
                                        <li>
                                            <div className="ui round radio checkbox">
                                                <input type="radio" name="radio" checked="checked"/>
                                                <label>Data Analysis</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ui round radio checkbox">
                                                <input type="radio" name="radio"/>
                                                <label>Big Data Administration</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ui round radio checkbox">
                                                <input type="radio" name="radio"/>
                                                <label>Big Data Administration</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ui round radio checkbox">
                                                <input type="radio" name="radio" disabled="disabled"/>
                                                <label>Big Data Administration</label>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label className="necessary">기간</label>
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
                                <div className="column">
                                    <div className="ui input time">
                                        <input type="text"/><label>h</label>
                                    </div>
                                    <div className="ui input time">
                                        <input type="text"/><label>m</label>
                                    </div>
                                    <div className="info-text"><i className="info16 icon"><span
                                        className="blind">infomation</span></i>소요시간은 100시간 이상, 1분 이내는 등록할 수 없습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="necessary">승인자 등록</label>
                            <div className="ui w624 action input">{/*  .write 추가시 clear아이콘 노출  */}
                                <input type="text" placeholder="승인자를 등록해주세요." readOnly/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <button className="ui button">승인자찾기</button>
                            </div>
                        </div>
                        {/*  // .Required input  */}
                        {/*  .Additional input  */}
                        <h4 className="ui dividing header">Additional input</h4>
                        <div className="field">
                            <label>강좌설명</label>
                            <div className="ui right-top-count input">{/*  .error //  */}
                                <span className="count"><span className="now">0</span>/<span className="max">500</span></span>
                                <textarea placeholder="500자 이내로 입력하세요."/>
                                <span className="validation">You can enter up to 500 characters.</span>
                            </div>
                        </div>
                        <div className="field">
                            <label>URL</label>
                            <URLClearInputBox/>
                        </div>
                        <div className="field">
                            <label>첨부파일</label>
                            <div className="ui w624 input file">
                                <input type="text" readOnly placeholder="첨부파일을 등록해주세요."/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                <input type="file" id="hidden-new-file"/>
                            </div>
                        </div>
                        {/*  // .Additional input  */}
                        <div className="buttons">
                            <button className="ui button fix line">Cancel</button>
                            <button className="ui button fix bg">Request for approval</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default ContentsArea
