import React, {useState} from 'react';
import {Icon, Button, Form, Select, Input} from 'semantic-ui-react';

const selectOptions = [
    {key: 'sel01', value: 'Consulting', text: 'Consulting'},
    {key: 'sel02', value: 'Marketing&Sales', text: 'Marketing&Sales'},
    {key: 'sel03', value: 'Technology', text: 'Technology'},
    {key: 'sel04', value: '전략기획', text: '전략기획'},
    {key: 'sel05', value: '재무', text: '재무'},
    {key: 'sel06', value: '법무', text: '법무'},
    {key: 'sel07', value: '구매', text: '구매'},
    {key: 'sel08', value: '윤리경영', text: '윤리경영'},
    {key: 'sel09', value: '대외협력', text: '대외협력'},
    {key: 'sel10', value: '기업문화', text: '기업문화'},
    {key: 'sel11', value: '경영층 보좌', text: '경영층 보좌'},
    {key: 'sel12', value: 'IT', text: 'IT'},
    {key: 'sel13', value: '환경안전', text: '환경안전'},
    {key: 'sel14', value: 'E&P Commercial', text: 'E&P Commercial'},
    {key: 'sel15', value: '기타', text: '기타'},
]

const PrivacyAgreeContent04 = ({onClickNextBtn}) => {
    //
    const [selectFirst, setSelectFirst] = useState('');
    const [selectSecond, setSelectSecond] = useState('');

    const selectJobGroup = (data) => {
        setSelectFirst(data.value);
    }

    const selectJob = (data) => {
        setSelectSecond(data.value);
    }


    return (
        <>
            <div className="title-box">
                <Icon className="login-sub2 woman"/>
                <h2>관심 직무</h2>
                <p>
                    여러분은 어떤 직무 분야에 관심을 가지고 있으신가요?<br/>
                    지금 당장은 아니더라도 앞으로 해보고 싶은 직무, 도전하고 싶은 업무에 대한 의견을 부탁드립니다.
                </p>
            </div>
            <Form>
                <div className="select-cont-wrap">
                    <div className="select-box">
                        <div className="select-title">Step 01. 관심 있는 직군을 선택해주세요.</div>
                        <Select placeholder="선택해주세요." options={selectOptions} onChange={(e, data) => selectJobGroup(data)}/>
                        { selectFirst === '기타' && (
                            <Input placeholder="Optional..." className="h48"/>
                        )}
                    </div>
                    <div className="select-box">
                        <div className="select-title">Step 02. 관심 직무를 선택해주세요.</div>
                        <Select placeholder="선택해주세요" options={selectOptions} onChange={(e, data) => selectJob(data)}/>
                        { selectSecond === '기타' && (
                            <Input placeholder="Optional..." className="h48"/>
                        )}
                    </div>
                </div>
            </Form>
            <div className="button-area">
                <div className="error">직군 및 직무를 선택해주세요.</div>
                {/*조건 미충족 시 버튼 disabled*/}
                <Button className="fix bg" onClick={()=>onClickNextBtn('step5')}>다음</Button>
            </div>
        </>
    );
}

export default PrivacyAgreeContent04;