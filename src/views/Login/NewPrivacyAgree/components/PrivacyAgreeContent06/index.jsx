import React from 'react';
import {Icon, Button, Form, Radio, Checkbox, Input} from 'semantic-ui-react';


const PrivacyAgreeContent06 = () => {
    //

    return (
        <>
            <div className="title-box">
                <Icon className="login-sub3 woman"/>
                <h2>학습형태</h2>
                <p>
                    여러분의 학습 목표와 선호하는 학습방식을 선택해 주세요.<br/>
                    Survey Data를 참고하여 향후 보다 효과적이고 의미있는 콘텐츠를 제공해드릴 예정입니다.
                </p>
            </div>
            <Form>
                <div className="type-check-wrap">

                    <div className="type-check-box type">
                        <h3 className="title-filter">학습유형</h3>
                        <div className="check-area">
                            <Radio className="base" label="오프라인" name="radio01" checked={true}/>
                            <Radio className="base" label="온라인" name="radio01" checked={false}/>
                            <Radio className="base" label="상관없음" name="radio01" checked={false}/>
                        </div>
                    </div>

                    <div className="type-check-box online">
                        <h3 className="title-filter">온라인 학습 중 선호하는 유형은 무엇인가요?</h3>
                        <div className="check-area">
                            <Checkbox className="base" label="Video" checked={true}/>
                            <Checkbox className="base" label="팟캐스트(Audio)" checked={false}/>
                            <Checkbox className="base" label="문서" checked={false}/>
                            <Checkbox className="base" label="Live(실시간 생중계)" checked={true}/>
                        </div>
                    </div>

                    <div className="type-check-box time">
                        <h3 className="title-filter">오프라인 학습 선호 시간대</h3>
                        <div className="check-area">
                            <Radio className="base" label="오전" name="radio02" checked={true}/>
                            <Radio className="base" label="오후" name="radio02" checked={false}/>
                            <Radio className="base" label="상관없음" name="radio02" checked={false}/>
                        </div>
                    </div>

                    <div className="type-check-box purpose">
                        <h3 className="title-filter">어떤 목적으로 교육을 수강하고 싶은가요?<span>(중복 3개 선택 가능)</span></h3>
                        <div className="check-area">
                            <Checkbox className="base" label="새로운 지식과 트랜드를 배우기 위해" checked={true}/>
                            <Checkbox className="base" label="현재 직무의 역량 강화를 위해" checked={false}/>
                            <Checkbox className="base" label="직무 전환을 위한 역량 습득을 위해" checked={false}/>
                            <Checkbox className="base" label="리더로 성장하기 위한 체계적 준비를 위해" checked={false}/>
                            <div className="etc-input">
                                <label>기타</label>
                                <Input className="h48" placeholder="Optional..." />
                            </div>
                        </div>
                    </div>

                </div>

            </Form>
            <div className="button-area">
                <div className="error">학습형태 항목별 몬의 사항에 대해 선택해주세요.</div>
                <Button className="fix bg">다음</Button>
            </div>
        </>
    );
}

export default PrivacyAgreeContent06;