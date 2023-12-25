import React from 'react';
import { Select } from 'semantic-ui-react'

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '전체'},
    {key: 'val02', value: 'val02', text: '저장'},
    {key: 'val03', value: 'val03', text: '승인'},
    {key: 'val04', value: 'val04', text: '승인대기'},
    {key: 'val05', value: 'val05', text: '반려'},
];

const Selectbox = () => (
    <Select 
        placeholder='분류를 선택해주세요' 
        className='ui small-border dropdown m0' 
        defaultValue={selectOptions01[0].value}
        options={selectOptions01}
    />
);

export default Selectbox