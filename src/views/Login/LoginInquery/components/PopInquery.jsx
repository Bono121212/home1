import React from "react";
import { useState } from "react";
import { Button, Form, Icon, Select } from "semantic-ui-react";
import classNames from "classnames";
import AttachFileUploadLine from "../../../../components/AttachFileUploadLine";

const PopInquery = (props) => {
    // Select
    const selectOptions01 = [
        { key: 'val01', value: 'val01', text: '회원가입 문의' },
        { key: 'val02', value: 'val02', text: '로그인 문의' },
        { key: 'val03', value: 'val03', text: '서비스 탈퇴' },
    ];
    // Input Clear
    const [nameFocus, setNameFocus] = useState(false);
    const [nameWrite, setNameWrite] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [emailWrite, setEmailWrite] = useState("");
    const [titleFocus, setTitleFocus] = useState(false);
    const [titleWrite, setTitleWrite] = useState("");

    return (
        <div className="apl-form-wrap type-join">
            <Form>
                <p className="form-guide"><span className="star">*</span> 표시는 필수 입력 사항입니다.</p>
                {/* 23-03-02 개인정보 활용 동의 추가 */}
                <Form.Field className="filed-line">
                    {/* 방침 제공 */}
                    <label>개인정보 활용 동의<span className="star">*</span></label>
                    <div className="privacy-text-box">
                        <div className="inner">
                            <p className="text1">수집 항목</p>
                            <p className="text2">문의자 유형, 이름, 이메일</p>
                            <p className="text1 mt30">처리 목적</p>
                            <p className="text2">mySUNI 문의 응대</p>
                            <p className="text1 mt30">처리 및 보유기간</p>
                            <p className="text2">문의 응대 후 6개월</p>
                        </div>
                    </div>
                    <div className="privacy-text-agree">
                        <div class="ui checkbox base">
                            <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="p_chk" />
                            <label for="p_chk">개인정보 이용 목적을 모두 확인하였으며, 이에 동의합니다.</label>
                        </div>
                    </div>
                </Form.Field>
                <Form.Field>
                    {/* 23-03-02 문의 유형 띄어쓰기 적용 */}
                    <label>문의 유형<span className="star">*</span></label>
                    <div className="select-box">
                        <Select placeholder='분류를 선택해 주세요.' className='dropdown selection' options={selectOptions01} defaultValue={selectOptions01[0].value} />
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>이름<span className="star">*</span></label>
                    <div className={classNames("ui input right-top-count", {"focus": nameFocus, "write": nameWrite, "error": props.error})}>
                        <input type="text"
                            placeholder="이름을 입력해 주세요."
                            value={nameWrite}
                            onClick={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                            onChange={(e) => setNameWrite(e.target.value)}
                        />
                        <button type='button' onClick={(e) => {setNameWrite("")}}><Icon className='clear link' /></button>
                        {/* <span className="validation">이름은 필수 입력 항목입니다. 해당 정보를 입력하신 후 등록해 주세요.</span> */}
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>E-mail<span className="star">*</span></label>
                    <div className={classNames("ui input right-top-count", {"focus": emailFocus, "write": emailWrite, "error": props.error})}>
                        <input type="text"
                            placeholder="E-mail을 입력해 주세요."
                            value={emailWrite}
                            onClick={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            onChange={(e) => setEmailWrite(e.target.value)}
                        />
                        <button type='button' onClick={(e) => {setEmailWrite("")}}><Icon className='clear link' /></button>
                        {/* <span className="validation">E-mail은 필수 입력 항목입니다. 해당 정보를 입력하신 후 등록해 주세요.</span> */}
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>제목<span className="star">*</span></label>
                    <div className={classNames("ui input right-top-count", {"focus": titleFocus, "write": titleWrite, "error": props.error})}>
                        <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
                        <input type="text"
                            placeholder="제목을 입력해 주세요."
                            value={titleWrite}
                            onClick={() => setTitleFocus(true)}
                            onBlur={() => setTitleFocus(false)}
                            onChange={(e) => setTitleWrite(e.target.value)}
                        />
                        <button type='button' onClick={(e) => {setTitleWrite("")}}><Icon className='clear link' /></button>
                        {/* <span className="validation">제목은 필수 입력 항목입니다. 해당 정보를 입력하신 후 등록해 주세요.</span> */}
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>내용<span className="star">*</span></label>
                    <div className="ui editor-wrap">
                        <div className="ui form">
                            <div className={"ui right-top-count input" + (props.error ? " error":"")}>
                                <span className="count">
                                    <span className="now">0</span>/<span className="max">1000</span>
                                </span>
                                <textarea placeholder="내용을 입력해 주세요." />
                                <span className="validation">내용은 필수 입력 항목입니다. 해당 정보를 입력하신 후 등록해 주세요.</span>
                                {/* <span className="validation">최대 1000자까지 입력 가능합니다.</span> */}
                            </div>
                        </div>
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>첨부파일</label>
                    <AttachFileUploadLine />
                </Form.Field>

                <div class="buttons">
                    {/* 23-03-02 버튼 컴포넌트로 변경 */}
                    <Button className="ui button fix bg" disabled>제출</Button>
                </div>
            </Form>
        </div>
    );
}
export default PopInquery;
