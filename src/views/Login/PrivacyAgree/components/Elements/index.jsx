import React, {Component} from 'react'
import {Button, Rating, Icon} from 'semantic-ui-react'



class Elements extends Component {

    render() {
        return (
            <div className="gWrap">
                <header>
                    <h1>Skuniversity Publishing Guide</h1>
                </header>
                <div className="gCont">
                    {/*Version*/}
                    <section>
                        <h2 className="test">JAVASCRIPT Version (해당 파일은 수정 금지)</h2>
                        <p className="gInfo">/js/semantic.min.js <a
                            href="https://semantic-ui.com/introduction/getting-started.html"
                            target="_blank" className="link">(Semantic UI - 2.4.1)</a></p>
                        <p className="gInfo">/js/state.min.js <a
                            href="https://semantic-ui.com/introduction/getting-started.html"
                            target="_blank" className="link">(Semantic UI - 2.4.1)</a></p>
                        <p className="gInfo">/js/calendar.min.js <a href="https://fomantic-ui.com/" target="_blank"
                                                                    className="link">(Fomantic
                            UI - 2.7.8)</a></p>
                        <p className="gInfo">/js/modal.min.js <a href="https://fomantic-ui.com/" target="_blank"
                                                                 className="link">(Fomantic
                            UI - 2.7.8) </a><a href="https://github.com/Semantic-Org/Semantic-UI/issues/6449"
                                               target="_blank">Semantic
                            UI - 2.4.1 팝업내에 스크롤 문제</a></p>
                        <p className="gInfo">/js/jquery-1.12.4.js <a href="https://jquery.com/" target="_blank"
                                                                     className="link">(Jquery -
                            1.12.4)</a></p>
                        <h2 className="test">CSS Version (해당 파일은 수정 금지)</h2>
                        <p className="gInfo">/css/semantic.min.css <a
                            href="https://semantic-ui.com/introduction/getting-started.html"
                            target="_blank" className="link">(Semantic UI - 2.4.0)</a></p>
                        <p className="gInfo">/css/calendar.min.css <a href="https://fomantic-ui.com/" target="_blank"
                                                                      className="link">(Fomantic
                            UI - 2.7.8)</a></p>
                    </section>
                    {/*Version*/}
                    <section>
                        <h2 className="test">Rule</h2>
                        <p className="gInfo">HTML : semantic-ui 기반 elements를 가져다가 .ui에 class를 추가 정의하여 작성</p>
                        <p className="gInfo">CSS : IE10 ~ , 기타 최신 브라우저 고려하여 작성</p>
                        <p className="gInfo">JAVASCRIPT : 가능하면 바닐라JS로 작성</p>
                    </section>

                    {/* 팝업 */}
                    <section>
                        <h2 className="test">팝업</h2>
                        <div className="preview" style="overflow:visible">
                            <button className="ui icon img-icon custom button"><i aria-hidden="ture" className="noti32 icon"></i><span className="blind">취소 패널티</span></button>
                            <div className="ui custom red popup">강좌 취소 시 다음 차수 완료에도 불이익이 갈수 있음</div>
                        </div>

                    </section>
                    {/* 테이블 */}
                    <section>
                        <h2 className="test">테이블</h2>
                        <p className="gInfo">CSS 테이블 .table-css</p>
                        <div className="preview">
                            <div className="table-css">
                                <div className="row">
                                    <div className="cell">TEXT</div>
                                    <div className="cell">TEXT</div>
                                </div>
                                <div className="row">
                                    <div className="cell vtop">VERTICAL ALIGN TOP</div>
                                    <div className="cell ">TEXT<br />TEXT</div>
                                </div>
                                <div className="row">
                                    <div className="cell v-middle">VERTICAL ALIGN MIDDLE</div>
                                    <div className="cell ">TEXT<br />TEXT</div>
                                </div>
                                <div className="row">
                                    <div className="cell v-bottom">VERTICAL ALIGN BOTTOM</div>
                                    <div className="cell ">TEXT<br />TEXT</div>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* 테이블 */}
                    {/* 스크롤 */}
                    <section>
                        <h2 className="test">스크롤 (common.scss 참고)</h2>
                        <p className="gInfo">.scrolling-40vh, scrolling-60vh, scrolling-80vh</p>
                    </section>

                    {/*Icon*/}
                    <section>
                        <h2 className="test">아이콘</h2>
                        <p className="gInfo">16 x 16</p>
                        <div className="preview">
                            <i className="new16 icon"><span className="blind">new</span></i>
                        </div>

                        <p className="gInfo">28 x 28</p>
                        <div className="preview">
                            <i className="icon reset"><span className="blind">reset</span></i>
                        </div>

                        <p className="gInfo">32 x 32</p>
                        <div className="preview">
                            <i aria-hidden="ture" className="learning32 icon"/>
                            <i aria-hidden="ture" className="community32 icon"/>
                            <i aria-hidden="ture" className="support32 icon"/>
                        </div>


                        <p className="gInfo">48 x 48</p>

                        <div className="preview">
                            <Icon className='avatar48'/>
                            {/*<i className="icon avatar48"><span className="blind">avatar</span></i>*/}
                        </div>
                        <p className="gInfo">56 x 56</p>
                        <div className="preview">
                            <Icon className='avatar56'/>
                            {/*<i className="icon avatar56"><span className="blind">avatar</span></i>*/}
                        </div>
                    </section>

                    {/*Button*/}
                    <section>
                        <h2 className="test">Button</h2>
                        <p className="gInfo">.rating</p>
                        <div className="preview">
                            <Rating icon='star' defaultRating={4} maxRating={5} />
                        </div>
                        <p className="gInfo">.country</p>

                        <div className="preview">
                            <div className="ui country buttons">
                                <button className="ui button active">KR</button>
                                <button className="ui button">EN</button>
                            </div>
                        </div>

                        <p className="gInfo">.left</p>
                        <div className="preview">
                            <Button icon className='post'><Icon className='post'/>Post</Button>

                            {/*<button className="ui icon left button post"><i aria-hidden="true" className="post icon"/>Post*/}
                            {/*</button>*/}

                            <Button icon className='postset delete'><Icon className='delete'/>Delete</Button>
                            {/*<button className="ui icon left button postset delete"><i aria-hidden="true"*/}
                            {/*                                                          className="delete icon"/>Delete*/}
                            {/*</button>*/}


                            <Button icon className='postset edit2'><Icon className='edit2'/>Edit</Button>
                            {/*<button className="ui icon left button postset edit2"><i aria-hidden="true"*/}
                            {/*                                                         className="edit2 icon"/>Edit*/}
                            {/*</button>*/}


                            <Button icon className='postset active edit2'><Icon className='edit2'/>Edit</Button>
                            {/*<button className="ui icon left button postset active edit2"><i aria-hidden="true"*/}
                            {/*                                                                className="edit2 icon"/>Edit*/}
                            {/*</button>*/}

                            <Button icon className='postset reply2'><Icon className='reply2'/>Reply</Button>
                            {/*<button className="ui icon left button postset reply2"><i aria-hidden="true"*/}
                            {/*                                                          className="reply2 icon/"/>Reply*/}
                            {/*</button>*/}


                            <Button icon className='postset list2'><Icon className='list2'/>List</Button>
                            {/*<button className="ui icon left button postset list2"><i aria-hidden="true"*/}
                            {/*                                                         className="list2 icon"/>List*/}
                            {/*</button>*/}


                            <Button icon className='moreview'><Icon className='moreview'/>list more</Button>
                            {/*<button className="ui icon left button moreview"><i aria-hidden="true"*/}
                            {/*                                                    className="moreview icon"/>list more*/}
                            {/*</button>*/}


                            <Button icon className='moreview'><Icon className='moreview'/>more comments (15)</Button>
                            {/*<button className="ui icon left button moreview"><i aria-hidden="true"*/}
                            {/*                                                    className="moreview icon"/>more*/}
                            {/*    comments (15)*/}
                            {/*</button>*/}
                        </div>

                        {/*<p className="gInfo">.toggle</p>*/}
                        {/*<div className="preview">*/}
                        {/*    <button className="ui toggle button toggle2" aria-pressed="false">Text</button>*/}
                        {/*    <button className="ui active toggle button toggle2" aria-pressed="true">Text</button>*/}
                        {/*    <button className="ui disabled toggle button toggle2" aria-pressed="true">Text</button>*/}
                        {/*    <button className="ui toggle button toggle3" aria-pressed="false">AI</button>*/}
                        {/*    <button className="ui active toggle button toggle3" aria-pressed="false">AI</button>*/}
                        {/*    <button className="ui disabled toggle button toggle3" aria-pressed="false">AI</button>*/}
                        {/*</div>*/}

                        {/*삭제버튼*/}
                        <p className="gInfo">.del</p>
                        <div className="preview">
                            <button className="ui button del">AI</button>
                        </div>

                        {/*팝업 긍정 부정*/}
                        <p className="gInfo">.pop</p>
                        <div className="preview">
                            <button className="ui button w190 pop d">Cancel</button>
                            <button className="ui button w190 pop p">Filter</button>
                        </div>

                        {/*가로사이즈 유동적인 버튼,*/}
                        {/*width값 없음/height:48px 고정. .p00 클래스 넣어서 가로 패딩 추가.*/}
                        <p className="gInfo">.free</p>
                        <div className="preview">
                            <button className="ui button free line p23">Go To This Community</button>
                            <button className="ui button free line p18">Go to this activity</button>
                            <button className="ui button free line p18 disabled" disabled>Go to this activity</button>
                            <button className="ui button free bg p18">Go to this activity</button>
                            <button className="ui button free bg p18 disabled" disabled>Go to this activity</button>
                        </div>

                        {/*가로 사이즈 고정되어있는 버튼*/}
                        {/*기본: 220x48 사이즈 잡혀있음 (필요시 각 버튼에서 수정), padding:0*/}
                        <p className="gInfo">.fix</p>
                        <div className="preview">
                            <button className="ui button fix bg">TEXT</button>
                            <button className="ui button fix bg disabled" disabled>TEXT</button>
                            <button className="ui button fix line">TEXT</button>
                            <button className="ui button fix line disabled" disabled>TEXT</button>
                        </div>

                        {/*add personal learning*/}
                        <p className="gInfo">.personal</p>
                        <div className="preview">
                            <button className="ui button personal line">+ Add Personal Learning</button>
                        </div>
                        {/*이미지아이콘 버튼*/}
                        <p className="gInfo">.img-icon</p>
                        <div className="preview">
                            <button className="ui icon button img-icon"><i aria-hidden="true" className="zoom2 icon"/>
                            </button>
                            <button className="ui icon button img-icon"><i aria-hidden="true"
                                                                           className="bookmark2 icon"/>
                            </button>
                            <button className="ui icon button img-icon"><i aria-hidden="true" className="share2 icon"/>
                            </button>
                        </div>
                    </section>
                    {/*checkbox/radio*/}
                    <section>
                        <h2 className="test">Checkbox / Radio</h2>
                        <div className="preview">
                            <div className="ui checkbox">
                                <input type="checkbox" className="hidden" tabIndex="0"/>
                                <label/>
                            </div>
                            <div className="ui checkbox">
                                <input type="checkbox" className="hidden" tabIndex="0" checked="checked"/>
                                <label/>
                            </div>
                            <div className="ui checkbox">
                                <input type="checkbox" className="hidden" tabIndex="0" disabled="disabled"/>
                                <label/>
                            </div>
                            {/*디자인 변경 필요 (제플린에 안잘라져있었음)*/}
                            <div className="ui checkbox">
                                <input type="checkbox" className="hidden" tabIndex="0" checked="checked"
                                       disabled="disabled"/>
                                <label/>
                            </div>
                            <span>4번째 disabled+checked상태 추후 수정예정</span>
                        </div>


                        <p className="gInfo">.base</p>
                        <div className="preview">
                            <div className="ui base radio checkbox">
                                <input type="radio" name="radio"/>
                                <label>Newest</label>
                            </div>
                            <div className="ui base radio checkbox">
                                <input type="radio" name="radio" checked="checked"/>
                                <label>Oldest</label>
                            </div>
                        </div>


                        <p className="gInfo">.base</p>
                        <div className="preview">
                            <div className="ui base checkbox">
                                <input type="checkbox" className="hidden" tabIndex="0"/>
                                <label>AI 공통 <span>(30)</span></label>
                            </div>
                        </div>
                    </section>
                    {/*Label*/}
                    <section>
                        <h2 className="test">Label</h2>
                        <p className="gInfo">.ribbon2</p>
                        <div className="preview">
                            <div className="ui ribbon2 label">Hotel</div>
                            <Label className='ribbon2'>{/* Required */}핵인싸과정</Label>
                        </div>
                        <p className="gInfo">.color</p>
                        <div className="preview">
                            <div className="ui color purple label">AI</div>
                            <div className="ui color teal label">Management</div>
                            <div className="ui color blue label">leadership</div>
                            <div className="ui color red label">혁신디자인</div>
                            <div className="ui color green label">global</div>
                            <div className="ui color violet label">DT</div>
                            <div className="ui color orange label">SV</div>
                            <div className="ui color yellow label">행복</div>
                        </div>
                        <p className="gInfo">.onlytext</p>
                        <div className="preview">
                            <div className="ui label bold onlytext"><i aria-hidden="true"
                                                                       className="video2 icon"/><span>Video</span>
                            </div>
                            <div className="ui label bold onlytext"><i aria-hidden="true"
                                                                       className="time2 icon"/><span>1h 30m</span>
                            </div>
                            <div className="ui label onlytext"><i aria-hidden="true"
                                                                  className="complete icon"/><span>이수 3,300명</span>
                            </div>
                            <div className="ui label onlytext"><i aria-hidden="true"
                                                                  className="price icon"/><span>12,000원</span></div>
                        </div>
                    </section>
                    {/*Input*/}
                    <section>
                        <h2 className="test">Input</h2>

                        <p className="gInfo">.mini (height 30px)</p>

                        <div className="preview">
                            <div className="ui mini icon input">
                                <input type="text" placeholder="normal..."/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui mini icon input">
                                <input type="text" placeholder="normal..." disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui mini icon input">
                                <input type="text" placeholder="normal..." value="입력중..." disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui pop search mini icon input">
                                <input type="text" placeholder="Search..." value=""/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui pop search mini icon input">
                                <input type="text" placeholder="Search..." value="" disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui pop search mini icon input">
                                <input type="text" placeholder="Search..." value="입력중..." disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui mini rtl icon input">
                                <input type="text" placeholder="normal..."/>
                            </div>
                            <div className="ui mini rtl icon input">
                                <input type="text" placeholder="normal..." disabled/>
                            </div>
                        </div>

                        <p className="gInfo">.small (height 38px)</p>

                        <div className="preview">
                            <div className="ui small icon input">
                                <input type="text" placeholder="normal..."/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui small icon input">
                                <input type="text" placeholder="normal..." disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui pop search small icon input">
                                <input type="text" placeholder="Search..." value=""/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui pop search small icon input">
                                <input type="text" placeholder="Search..." value="" disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui small rtl icon input">
                                <input type="text" placeholder="normal..."/>
                            </div>
                            <div className="ui small rtl icon input">
                                <input type="text" placeholder="normal..." disabled/>
                            </div>
                        </div>

                        <p className="gInfo">.large (height 48px)</p>
                        <div className="preview">
                            <div className="ui large icon input">
                                <input type="text" placeholder="normal..."/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui large icon input">
                                <input type="text" placeholder="normal..." disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                            </div>
                            <div className="ui pop search large icon input">
                                <input type="text" placeholder="Search..." value=""/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui pop search large icon input">
                                <input type="text" placeholder="Search..." value="" disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                            <div className="ui large rtl icon input">
                                <input type="text" placeholder="normal..."/>
                            </div>
                            <div className="ui large rtl icon input">
                                <input type="text" placeholder="normal..." disabled/>
                            </div>
                        </div>
                        <p className="gInfo">.action (height 48px)</p>
                        <div className="preview">

                            <div className="ui action input">
                                <input type="text" placeholder="Search..."/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <button className="ui button">승인자찾기</button>
                            </div>

                            <div className="ui disabled action input">
                                <input type="text" placeholder="Search..." disabled/>
                                <i aria-hidden="true" className="clear link icon"/>
                                <button className="ui button">승인자찾기</button>
                            </div>


                        </div>
                    </section>
                </div>
            </div>
        )
    }
}


export default Elements