import React from 'react';
import { Link } from 'react-router-dom';
// import Profile48Px from "../../../../images/all/pic_profile_default.png";

const OverviewTeacherCard = (props) => {
    return(
        <Link className="teacher-card">
            <div className="prf-area">
                <div className='prf'>
                    <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/img-profile-80-px.png" alt="프로필사진" />
                </div>
                { props.leader && <span className="leader">대표</span> }
            </div>
            <div className="name-area">
                <p className='name'>
                    {props.name}
                </p>
                <p className='organ'>{props.organ}</p>

                {/*
                <p className='name'>조나단 다이브</p>
                <p className='organ'>SK하이닉스 지속가능경영 위원회 사외이사</p>
                <p className='desc'>
                    (現) mySUNI Deep Change 연구 임원 (前) SK 플래닛 커머스 전략 실장 <br />
                    (現) mySUNI Deep Change 연구 임원 (前) SK 플래닛 커머스 전략 실장
                </p>
                */}
            </div>
        </Link>
    )
}
export default OverviewTeacherCard;