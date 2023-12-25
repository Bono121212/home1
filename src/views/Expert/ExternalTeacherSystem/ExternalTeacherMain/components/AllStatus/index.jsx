import React, {Component} from 'react'
import {Image, Select} from 'semantic-ui-react'
import tempImage1 from '../../../../../../images/all/temp_image_1.png';
import tempImage2 from '../../../../../../images/all/temp_image_2.png';
import tempImage3 from '../../../../../../images/all/temp_image_3.png';

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '2021년'},
    {key: 'val02', value: 'val02', text: '2020년'},
];
const selectOptions02 = [
    {key: 'val01', value: 'val01', text: '2021년 3월'},
    {key: 'val02', value: 'val02', text: '2021년 4월'},
];

class AllStatus extends Component {
    render() {
        return (

            <div className="all-status-area">
                <div className="learning-status">
                    <div className="learning-status">
                        <div className="status-inner">
                            <div className="status-title">
                                <strong>학습자 이수 현황</strong>
                                <div className="right-wrap board-down-title-right">
                                    <Select placeholder='분류를 선택해주세요' 
                                        className='ui small-border dropdown m0'
                                        defaultValue={selectOptions01[0].value}
                                        options={selectOptions01}/>
                                </div>
                            </div>
                            <div className="graph-wrap">
                                <div className="graph"><Image src={tempImage1} /></div>
                                <div className="graph"><Image src={tempImage2} /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative-status">
                    <div className="status-inner">
                        <div className="status-title">
                            <strong>관계사 별 학습현황</strong>
                            <div className="right-wrap board-down-title-right">
                                <Select placeholder='분류를 선택해주세요' 
                                    className='ui small-border dropdown m0'
                                    defaultValue={selectOptions02[0].value}
                                    options={selectOptions02}/>
                            </div>
                        </div>
                        <div className="graph-wrap">
                            <div className="graph"><Image src={tempImage3}></Image></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllStatus