import React, {Component} from 'react'
import { Icon, Button, Form, Select } from 'semantic-ui-react'
// import classNames from "classnames";

const selectOptions01 = [
    {key: 'Consulting', value: 'Consulting', text: 'Consulting'},
    {key: 'Marketing & Sales', value: 'Marketing & Sales', text: 'Marketing & Sales'},
    {key: 'Technology', value: 'Technology', text: 'Technology'},
    {key: '전략기획', value: '전략기획', text: '전략기획'},
    {key: '재무', value: '재무', text: '재무'},
    {key: '법무', value: '법무', text: '법무'},
    {key: '구매', value: '구매', text: '구매'},
    {key: '윤리경영', value: '윤리경영', text: '윤리경영'},
    {key: '대외협력', value: '대외협력', text: '대외협력'},
    {key: '기업문화', value: '기업문화', text: '기업문화'},
    {key: '경영층 보좌', value: '경영층 보좌', text: '경영층 보좌'},
    {key: 'IT', value: 'IT', text: 'IT'},
    {key: '환경안전', value: '환경안전', text: '환경안전'},
    {key: 'E&P Commercial', value: 'E&P Commercial', text: 'E&P Commercial'},
    {key: '기타', value: '기타', text: '기타'},
];
const selectOptions02 = [
    {key: 'ICT 컨설팅', value: 'ICT 컨설팅', text: 'ICT 컨설팅'},
];
class ContentsArea extends Component {
    state = {activeItem: 'learning', focus: false, write: ''};

    render() {

        return (
            <Form>
                {/* <h3 className="title-filter">관심직무 선택</h3> */}
                <div className="select-cont-wrap">
                    <div className="select-box">
                        <div className="select-title">Step 01. 관심 있는 직군을 선택해주세요.</div>
                        <Select placeholder='선택해주세요' options={selectOptions01}/>
                    </div>
                    <div className="select-box">
                        <div className="select-title">Step 02. 관심 직무를 선택해주세요.</div>
                        <Select placeholder='선택해주세요' options={selectOptions02}/>
                    </div>
                </div>
                <div className="select-error">
                    <Icon className='error16'/><span className="blind">error</span>
                    <span>
                        직군 및 직무를 선택해주세요.
                    </span>
                </div>
                <div className="button-area">
                    {/* <Button className='fix line'>Previous</Button> */}
                    <Button className='fix bg'>다음</Button>
                </div>
            </Form>
        )
    }
}

export default ContentsArea
