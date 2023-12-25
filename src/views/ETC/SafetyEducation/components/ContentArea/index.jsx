import React, { useState } from 'react';

const ContentArea = (props) => {
    const [focus, setFocus] = useState(false);
    const [write, setWrite] = useState(props.error ? "1234" : "");

    return (
        <div className="content-half safety-page">
            <div className="login-content">
                <div className="left-area">
                    <div className="inner">
                        <h1 className="title">안전보건교육</h1>
                        <p className="explain">안전한 일터, 함께 만들어갑시다.</p>
                        <div className="illust">
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/img_safety_edu.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-area sty2">
                    <div className="inner">
                        <div className="logo big"><i className="sk-university icon"><span className="blind">SUNI</span></i></div>

                        <h2>학습자 본인인증</h2>
                        <p className="explain">
                            해당 교육은 안전 보건 교육이므로, <br />Card Overview 진입 이전 학습자 본인 인증이 필요합니다.
                        </p>

                        <form className="ui form">
                            <div className="field">
                                <label>휴대전화</label>
                                <div className="ui h48 input">
                                    <input type="text" value="010-****-0000" disabled />
                                </div>
                                <div className="making-guide">
                                    <span>가입된 계정 정보의 휴대폰 번호로 인증코드가 전송됩니다.</span>
                                </div>
                            </div>
                            <button className="ui button fix bg">인증번호 받기</button>
                        </form>
                        <form className="ui form">
                            <div className="field">
                                <label>Code number</label>
                                <div className={"ui h48 input" + (focus?" focus":"") + (write?" write":"")}>
                                    <input type="password"
                                        placeholder="Code number"
                                        value={write}
                                        onClick={() => setFocus(true)}
                                        onBlur={() => setFocus(false)}
                                        onChange={(e) => setWrite(e.target.value)}
                                    />
                                    {props.cert && <span className="remain">남은시간 5:00</span>}
                                    <i aria-hidden="true" className="clear link icon"></i>
                                </div>
                                {props.error
                                ?
                                    <div className="making-guide error">
                                        <i class="error16 icon"><span class="blind">error</span></i>
                                        <span>본인 인증이 5회 이상 실패하였습니다. <br />인증을 다시 진행해 주세요.</span>
                                    </div>
                                :
                                    <div className="making-guide">
                                        <span>전송된 인증번호를 입력해 주세요.</span>
                                    </div>
                                }
                            </div>
                            <button className="ui button fix bg" disabled>확인</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContentArea
