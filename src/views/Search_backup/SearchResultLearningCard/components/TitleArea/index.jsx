import React, {Component, createRef} from 'react'
import {
    Label, Icon, Button, Image, Checkbox,
} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        return (
            <div className="sort-condition">
                <div className="ui full segment">
                    {/* .keyword */}
                    <div className="keyword"><span>'Big Data 설계'</span>에 대한 검색 결과 입니다.</div>
                    {/* // .keyword */}
                    {/* .filter-wrap2 */}
                    <div className="filter-wrap2">
                        {/* .term */}
                        <div className="term">
                            <div className="table-css">
                                <div className="row">
                                    <div className="cell v-middle">
                                        <span>Learning date</span>
                                    </div>
                                    <div className="cell v-middle">
                                        <div className="ui h40 calendar" id="rangestart">
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
                                        <div className="ui h40 calendar" id="rangeend">
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
                                    <div className="cell v-middle">
                                        <Checkbox label={<label>수강신청 가능 학습만 보기</label>}
                                                  className='base'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // .term */}
                        {/* .details */}
                        <div className="details">
                            <div className="table-css">
                                <div className="row">
                                    <div className="cell vtop">
                                        <div className="f-tit">College</div>
                                        <div className="f-list">
                                            <div className="scrolling">
                                                <div className="college">
                                                    {/* click시 active class 추가 */}
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        0이면 토글가능 (0)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                    <Button className='toggle toggle3' aria-pressed="false">
                                                        AI (4)
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell vtop">
                                        <div className="f-tit">Channel</div>
                                        <div className="f-list">
                                            <div className="scrolling">
                                                <div className="channel">
                                                    <ul>
                                                        <li>
                                                            <Checkbox label={<label>빅데이터 <span>(323)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>외국어 <span>(10)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox
                                                                label={<label>2줄일 경우 2줄일 경우 2줄일 경우 2줄일 경우 2줄일 경우 2줄일
                                                                    경우<span>(30)</span></label>} className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>유통 <span>(1)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>회계 <span>(1)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>경영 <span>(23)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>0개 인경우 라도 체크가능 <span/></label>}
                                                                      className='base'/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell vtop">
                                        <div className="f-tit">Learning Type</div>
                                        <div className="f-list">
                                            <div className="scrolling">
                                                <div className="learning">
                                                    <ul>
                                                        <li>
                                                            <Checkbox label={<label>Classroom <span>(30)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox
                                                                label={<label>E-learning <span>(30)</span></label>}
                                                                className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>Audio <span>(30)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>Video <span>(20)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label={<label>Webpage <span>(0)</span></label>}
                                                                      className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox
                                                                label={<label>experiential <span>(0)</span></label>}
                                                                className='base'/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cell vtop">
                                        <div className="f-tit">Selected</div>
                                        <div className="f-list">
                                            <div className="scrolling">
                                                <div className="selected">
                                                    {/* 선택 없을 경우 */}
                                                    <div className="empty">Not Selected</div>

                                                    {/*<Button className="del type2">Cloud Developing</Button>*/}
                                                    {/*<Button className="del type2">AI</Button>*/}
                                                    {/*<Button className="del type2">AI Coding 기초</Button>*/}
                                                    {/*<Button className="del type2">Webpage</Button>*/}
                                                    {/*<Button className="del type2">빅데이터</Button>*/}
                                                    {/*<Button className="del type2">2019.02.02 ~ 2019.03.06</Button>*/}
                                                    {/*<Button className="del type2">공업수학</Button>*/}
                                                    {/*<Button className="del type2">양자역학</Button>*/}
                                                    {/*<Button className="del type2">DUMMY</Button>*/}
                                                    {/*<Button className="del type2">dummy</Button>*/}
                                                    {/*<Button className="del type2">DUMMY</Button>*/}
                                                    {/*<Button className="del type2">dummy</Button>*/}
                                                    {/*<Button className="del type2">DUMMY</Button>*/}
                                                    {/*<Button className="del type2">dummy</Button>*/}
                                                    {/*<Button className="del type2">DUMMY</Button>*/}
                                                    {/*<Button className="del type2">dummy</Button>*/}
                                                    {/*<Button className="del type2">DUMMY</Button>*/}
                                                    {/*<Button className="del type2">dummy</Button>*/}
                                                    {/*<Button className="del type2">DUMMY</Button>*/}
                                                    {/*<Button className="del type2">dummy</Button>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="f-btn">
                                            {/*활성화*/}
                                            {/*<Button className='filter-w' icon><Icon*/}
                                            {/*    name='filter24-w'/><span>Filter</span></Button>*/}
                                            <Button className='filter-w' icon disabled><Icon
                                                name='filter24-w'/><span>Filter</span></Button>
                                        </div>
                                        <div className="f-reset">
                                            <Button className='clear' icon><Icon className='reset'/><span
                                                className="blind">reset</span></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // .details */}
                    </div>
                    {/* // .filter-wrap2 */}
                </div>
            </div>
        )
    }
}


export default TitleArea
