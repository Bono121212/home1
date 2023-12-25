import React, { useState } from 'react'
import { Label } from 'semantic-ui-react'
import classNames from 'classnames';

function InterestedTags() {
    /* 변경되는 상태들 */
    const [channelSelected, setChannelSelected] = useState(true);
    // const [openChannel, setOpenChannel] = useState(false);

    /* event handler */
    const channelSelect = () => {
        setChannelSelected(!channelSelected);
    } 

    // const onClickButton =() => {
    //     setOpenChannel(!openChannel);
    // }
    
    return (
        // 2023-11-16 메인에서는 태그 영역 온오프 기능 제외
        // <div className={classNames('channel-tag-wrap', {'on': openChannel })}>
        <div className='channel-tag-wrap'>
                {/* 2023-11-16 메인에서는 태그 영역 온오프 기능 제외
                <div className="channel-tag-btn"><Button className="channel-btn" onClick={onClickButton}/></div>*/}
                {/* <div className="channel-tag-btn"><span className='more-tag-count'><span className='blind'>더 많은 태그 정보</span></span></div> */}
                <div className="channel-tag-box">
                    <div className="channel-wrap">
                        {/* <Label as='button' className='ch'>전체</Label> */}
                        <Label as='button' className='ch career-skill none'>데이터 길라잡이</Label>
                        <Label as='button' className={classNames('ch career-skill have', { 'active' : channelSelected })} onClick={channelSelect}>AI Biz. Implementation</Label>
                        <Label as='button' className='ch career-skill none'>Competency(Working Smart)</Label>
                        <Label as='button' className='ch career-skill have'>DT Biz.& Implementation</Label>
                        <Label as='button' className='ch career-skill need'>Deep Change Leadership</Label>
                        <Label as='button' className='ch career-skill have'>ESG Essentials Track</Label>
                        <Label as='button' className='ch career-skill need'>Competency</Label>
                        <Label as='button' className='ch career-skill need'>워킹백워드</Label>
                        <Label as='button' className='ch career-skill need'>Cloud Engineer Track</Label>
                        <Label as='button' className='ch career-skill need'>Technology Inteligence</Label>
                        {/* <Label as='button' className='ch career-skill none'>행복 추구 실천</Label> */}
                        {/* <Label as='button' className='ch career-skill none'>AI/DT Literacy</Label>
                        <Label as='button' className='ch career-skill none'>AI Fundamentals</Label>
                        <Label as='button' className='ch career-skill none'>AI Tech.Essential</Label>
                        <Label as='button' className='ch career-skill none'>Computer Vision AI</Label> */}
                        {/* <Label as='button' className='ch career-skill none'>Language AI</Label>
                        <Label as='button' className='ch career-skill none'>Speech AI</Label> */}
                        {/* <Label as='button' className='ch career-skill none'>Post Corona Perspectives</Label> */}
                        {/* <Label as='button' className='ch career-skill none'>HR</Label>
                        <Label as='button' className='ch career-skill none'>주요 국가의 이해_이슈 및 트랜드</Label>
                        <Label as='button' className='ch career-skill none'>데이터 길라잡이</Label>
                        <Label as='button' className='ch career-skill none'>Competency(Working Smart)</Label>
                        <Label as='button' className='ch career-skill none'>DT Biz.& Implementation</Label>
                        <Label as='button' className='ch career-skill none'>Deep Change Leadership</Label>
                        <Label as='button' className='ch career-skill none'>ESG Essentials Track</Label>
                        <Label as='button' className='ch career-skill none'>Competency</Label>
                        <Label as='button' className='ch career-skill none'>워킹백워드</Label> */}
                        <Label as='button' href='/MyCareer/CareerPlatform' className='ch more-tag-count'><span className='blind'>더 많은 태그 정보</span></Label>
                    </div>
                </div>
            </div>
    );
}

// class InterestedTags extends Component {
    


//     render() {
//         const { channelSelected, openChannel } = this.state;

//         return (
//             <div className={classNames('channel-tag-wrap', {'on': openChannel })}>
//                 <div className="channel-tag-btn"><Button className="channel-btn" onClick={this.onClickButton}/></div>
//                 <div className="channel-tag-box">
//                     <div className="channel-wrap">
//                         <Label as='button' className='ch'>데이터 길라잡이</Label>
//                         <Label as='button' className={classNames('ch', { 'active' : channelSelected })} onClick={this.channelSelect}>AI Biz. Implementation</Label>
//                         <Label as='button' className='ch'>Competency(Working Smart)</Label>
//                         <Label as='button' className='ch'>DT Biz.& Implementation</Label>
//                         <Label as='button' className='ch'>Deep Change Leadership</Label>
//                         <Label as='button' className='ch'>ESG Essentials Track</Label>
//                         <Label as='button' className='ch'>Competency</Label>
//                         <Label as='button' className='ch'>워킹백워드</Label>
//                         <Label as='button' className='ch'>Cloud Engineer Track</Label>
//                         <Label as='button' className='ch'>Technology Inteligence</Label>
//                         <Label as='button' className='ch'>행복 추구 실천</Label>
//                         <Label as='button' className='ch'>AI/DT Literacy</Label>
//                         <Label as='button' className='ch'>AI Fundamentals</Label>
//                         <Label as='button' className='ch'>AI Tech.Essential</Label>
//                         <Label as='button' className='ch'>Computer Vision AI</Label>
//                         <Label as='button' className='ch'>Language AI</Label>
//                         <Label as='button' className='ch'>Speech AI</Label>
//                         <Label as='button' className='ch'>Post Corona Perspectives</Label>
//                         <Label as='button' className='ch'>HR</Label>
//                         <Label as='button' className='ch'>주요 국가의 이해_이슈 및 트랜드</Label>
//                         <Label as='button' className='ch'>데이터 길라잡이</Label>
//                         <Label as='button' className='ch'>Competency(Working Smart)</Label>
//                         <Label as='button' className='ch'>DT Biz.& Implementation</Label>
//                         <Label as='button' className='ch'>Deep Change Leadership</Label>
//                         <Label as='button' className='ch'>ESG Essentials Track</Label>
//                         <Label as='button' className='ch'>Competency</Label>
//                         <Label as='button' className='ch'>워킹백워드</Label>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default InterestedTags
