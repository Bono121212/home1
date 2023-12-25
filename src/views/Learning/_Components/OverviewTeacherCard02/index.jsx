import React from 'react';
import Profile48Px from "../../../../images/all/profile-48-px.png";

const CardTeacher02 = () => {
    return(
        <div className="teacher-card">
            <div className="prf-area">
                <img src={Profile48Px} alt="프로필사진" />
            </div>
            <div className="name-area">
                <p className='name'>조나단 다이브</p>
                <p className='organ'>SK하이닉스 지속가능경영 위원회 사외이사</p>
                <p className='desc'>
                    (現) mySUNI Deep Change 연구 임원 (前) SK 플래닛 커머스 전략 실장 <br />
                    (現) mySUNI Deep Change 연구 임원 (前) SK 플래닛 커머스 전략 실장
                </p>
            </div>
        </div>
    )
}
export default CardTeacher02;