import React from 'react';
import BadgeCard from '../BadgeCard';
//import LogoImg from '../../../images/all/badge-v2/logo-gnb.png';
//import LogoImg2 from "../../../images/all/badge-v2/microsoft.png";
//import LogoImg3 from "../../../images/all/badge-v2/skmembers_logo_temp.png";
//https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/bg-badge-${badgeColor}-v-3.png
//https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/bg-badge-${badgeColor}-plus-v-3.png
//https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/badge-${badgeColor}-star.png

export default function BadgeContainer ({
    badgeName,
    level,
    badgeStyle,
    badgeColor,
    //backgroundImagePath,
    //topImagePath,
    cooperation, //협력사 유무
    hasPlus,//퍼블용 plus 뱃지 구분 
    membersCorp,//퍼블용 멤버사 구분
}) {
    // const starColor = getBadgeColor(badgeColor); png로 교체

        return (
            <>
                <BadgeCard
                    badgeStyle={badgeStyle}
                >
                    <span className="badge_thumb">
                        {
                            hasPlus ? 
                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t-plus_1.png`} alt="뱃지 plus 예시"/>
                            :
                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t.png`} alt="뱃지 plus 예시"/>
                        }
                    </span>
                    {/* s : Badge 통이미지 변경으로 삭제한 영역 */}
                    {/* 멤버사여도 협력사 가능 */}
                    {/* <span className="issuing">
                        { !membersCorp ? (
                            <span className='ui image'><img src={LogoImg} alt="mySUNI"/></span>
                            ) : (
                            <span className='ui image'><img src={LogoImg3} alt="mySUNI멤버사"/></span>
                            )
                        }
                    </span>
                    <span className="title">
                        <span className="cell">
                            <span>{ badgeName }</span>
                        </span>
                    </span>
                    {
                        cooperation && 
                        <span className='cooperation'>
                            <span className='ui image'><img src={LogoImg2} alt="협력사"/></span>
                        </span>
                    }
                    <p className="star-score">
                        {level === 'Level1' && (
                            <>
                                <em>
                                    <img src={require(`../../../images/all/badge-v2/badge-${badgeColor}-star.png`)} alt="badge star"/>
                                </em>
                            </>
                        )} 
                        {level === 'Level2' && (
                            <>
                                <em>
                                    <img src={require(`../../../images/all/badge-v2/badge-${badgeColor}-star.png`)} alt="badge star"/>
                                </em>
                                <em>
                                    <img src={require(`../../../images/all/badge-v2/badge-${badgeColor}-star.png`)} alt="badge star"/>
                                </em>
                            </>
                        )}
                        {level === 'Level3' && (
                            <>
                                <em>
                                    <img src={require(`../../../images/all/badge-v2/badge-${badgeColor}-star.png`)} alt="badge star"/>
                                </em>
                                <em>
                                    <img src={require(`../../../images/all/badge-v2/badge-${badgeColor}-star.png`)} alt="badge star"/>
                                </em>
                                <em>
                                    <img src={require(`../../../images/all/badge-v2/badge-${badgeColor}-star.png`)} alt="badge star"/>
                                </em>
                            </>
                        )}
                    </p> */}
                    {/* e : Badge 통이미지 변경으로 삭제한 영역 */}
                </BadgeCard>
            </>
        )
}

/* const getBadgeColor = (badgeColor) => {
    switch (badgeColor) {
        case 'blue' : { //AI/DT   
            return '#34508c'
        }
        case 'yellow' : { //공통직무
            return '#ffb136'
        }
        case 'green' : { //미래Biz
            return '#428052'
        }
        case 'red' : { //행복 경영
            return '#ea012c'
        }
        case 'skyblue' : { //BM Design
            return '#61c1be'
        }
        case 'orange' : {
            return '#ef6d47'
        }
        case 'lightgreen' : {
            return '#7db820'
        }
        case 'purple' : {
            return '#9947df'
        }
        default :
    }
} */