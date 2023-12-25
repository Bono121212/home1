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
                <Icon className='icon-authority-01'/>
                <h2>mySUNI 관리자 권한 신청 정보 수정</h2>
                <p>권한 신청한 내역을 수정해보세요.</p>
            </div>
        </>
    )
}
export default TitleArea
