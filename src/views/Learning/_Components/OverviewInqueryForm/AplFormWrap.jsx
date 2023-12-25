import React from "react";
import { Button, Form, Icon, Select } from "semantic-ui-react";
import AttachFileUploadLine from "../AttachFileUploadLine";

const AplFormWrap = (props) => {
    const selectOptions01 = [
        { key: 'val01', value: 'val01', text: '학습문의' },
        { key: 'val02', value: 'val02', text: '이수시간' },
        { key: 'val03', value: 'val03', text: '회원정보' },
        { key: 'val04', value: 'val04', text: '결제환불' },
        { key: 'val05', value: 'val05', text: '기타' },
    ];
    const selectOptions02 = [
        { key: 'val01', value: 'val01', text: '사이트개선' },
        { key: 'val02', value: 'val02', text: '콘텐츠개선' },
        { key: 'val03', value: 'val03', text: 'UI개선' },
    ];

    return (
        <div className="apl-form-wrap support">
        <Form>
            <p className="form-guide"><span className="star">*</span> 표시는 필수 입력 사항입니다.</p>
            <Form.Field>
                <label>문의유형<span className="star">*</span>
                <Button className="faq-info"><Icon className="info20"/>혹시 이런 문의일까요?</Button>
                </label>
                <div className="select-box">
                    <Select placeholder='분류를 선택해주세요' className='dropdown selection' options={selectOptions01} />
                    <Select placeholder='분류를 선택해주세요' className='dropdown selection' options={selectOptions02} />
                </div>
            </Form.Field>
            <Form.Field className="row">
                <label>과정정보</label>
                <div className="field-data">
                    최대 200자 카드명이 표기됩니다.
                </div>
            </Form.Field>
            <Form.Field>
                <label>제목<span className="star">*</span></label>
                <div className={"ui right-top-count input" + (props.error ? " error":"")}>{/* .error */}
                    <span className="count"><span className="now">0</span>/<span className="max">100</span></span>
                    <input type="text" placeholder="제목을 입력해주세요." />
                    {/* 입력값이 있을경우 아이콘 활성화 됨. */}
                    <Icon className='clear link' />
                    <span className="validation">제목은 필수 입력 항목입니다. 해당 정보를 입력하신 후 등록해주세요.</span>
                    {/* <span className="validation">최대 100자까지 입력 가능합니다.</span> */}
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
                            <textarea placeholder="1000자 이내로 입력하세요." />
                            <span className="validation">내용은 필수 입력 항목입니다. 해당 정보를 입력하신 후 등록해주세요.</span>
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
                <button class="ui button fix bg">등록</button>
            </div>
        </Form>
    </div>
);
}
export default AplFormWrap;
