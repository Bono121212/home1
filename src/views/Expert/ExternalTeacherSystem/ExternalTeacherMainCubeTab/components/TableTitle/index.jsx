import React, { Component } from "react";
import {Select,Checkbox} from "semantic-ui-react";
const selectOptions02 = [
    {key: 'val01', value: 'val01', text: '최근 등록 순'},
    {key: 'val02', value: 'val02', text: '학습자 순'},
    {key: 'val02', value: 'val02', text: '이수자 순'}
];

class TableTitle extends Component {
    render() {
        return (
            <div className="table-board-title">
                <div className="list-number">
                    총 <strong>59</strong>건이 검색 되었습니다.
                </div>
                <div className="right-wrap board-down-title-right">
                    <Checkbox 
                        className='check'
                        label="승인대기(12)" 
                    />
                    <Checkbox 
                        className='check'
                        label="채점대기(12)" 
                    />
                    <Select placeholder='분류를 선택해주세요' 
                        className='ui small-border dropdown m0'
                        defaultValue={selectOptions02[0].value}
                        options={selectOptions02}/>
                </div>
            </div>
        );
    }
}

export default TableTitle;
