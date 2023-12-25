import React from 'react'

const BageBox = (props) => {
    
    const {
        missionType,  
        missionResult,
        missionBadge, 
        badgeTitle,   
        completeDate,
        attendLink,
        review = false
    } = props;

    /////////////////////////
    // 퍼블 확인용 </br> 처리대응
    const titleSet = () => {
        return <strong dangerouslySetInnerHTML={{__html: badgeTitle}}></strong>
    }
    /////////////////////////

    return (
        <article className={`badge-info ${review === false && 'badge-off'}`}>
            <span className='badge-tit'>{missionType}</span>
            <div className={`promotion-badge ${missionBadge}`}></div>
            {titleSet()}
            {review 
                ? 
                <React.Fragment>
                    <span className='badge-result'>{missionResult}</span>
                    <span>{completeDate}</span>
                </React.Fragment>
                :
                <React.Fragment>
                    <a href={attendLink} className='mission-join' rel='noopener noreferrer'>참여하기</a>
                </React.Fragment>
            }
        </article>
    )
}

export default BageBox
