import React from 'react'
import CubeDetailSec from '../CubeDetailSec';
import OverviewTeacherCard from '../OverviewTeacherCard';

const OverviewTeacher = () => {
    return (
        <CubeDetailSec className="ov-teacher-sec" id="lms-teacher">
            <div className="detail-sec-head">
                <h2 className="detail-sec-title">과정을 가르쳐주실 강사님을 소개해요!</h2>
            </div>
            <div className="detail-sec-body">
                {/* 강사소개 */}
                <div className="ov-teacher">
                    <OverviewTeacherCard name="조나단" organ="SK하이닉스" leader />
                    <OverviewTeacherCard name="조나단 다이브" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="김써니" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="김한국" organ="SK하이닉스" />
                    <OverviewTeacherCard name="이써니" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="이한국" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="이구에르" organ="SK하이닉스" />
                    <OverviewTeacherCard name="조크라테스" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="아담" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="이써니" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="이한국" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="이구에르" organ="SK하이닉스" />
                    <OverviewTeacherCard name="조크라테스" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                    <OverviewTeacherCard name="아담" organ="SK하이닉스 지속가능경영 위원회 사외이사" />
                </div>
                {/* //강사소개 */}
            </div>
        </CubeDetailSec>
    )
}
export default OverviewTeacher;
