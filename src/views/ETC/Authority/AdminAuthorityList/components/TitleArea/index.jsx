import React from 'react';
import {Icon} from 'semantic-ui-react';

const TitleArea = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <i className="sk-university-login icon"><span className="blind">my suni</span></i>
                </div>
            </div>
            <div className="title-box">
                <Icon className='icon-authority-02'/>
                <h2>mySUNI 관리자 권한 신청 목록</h2>
                <p>권한 신청한 목록을 확인하세요.</p>
            </div>
        </>
    )
}
export default TitleArea
