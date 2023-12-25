import React, { useState } from 'react'
import { Button, Label } from 'semantic-ui-react'
import classNames from 'classnames';

function InterestedTags() {
    /* 변경되는 상태들 */
    const [channelSelected, setChannelSelected] = useState(true);
    const [openChannel, setOpenChannel] = useState(false);

    /* event handler */
    const channelSelect = () => {
        setChannelSelected(!channelSelected);
    } 

    const onClickButton =() => {
        setOpenChannel(!openChannel);
    }
    
    return (
        <div className={classNames('channel-tag-wrap', {'on': openChannel })}>
                <div className="channel-tag-btn"><Button className="channel-btn" onClick={onClickButton}/></div>
                <div className="channel-tag-box">
                    <div className="channel-wrap">
                        <Label as='button' className='ch'>데이터 길라잡이</Label>
                        <Label as='button' className={classNames('ch', { 'active' : channelSelected })} onClick={channelSelect}>AI Biz. Implementation</Label>
                        <Label as='button' className='ch'>Competency(Working Smart)</Label>
                        <Label as='button' className='ch'>DT Biz.& Implementation</Label>
                        <Label as='button' className='ch'>Deep Change Leadership</Label>
                        <Label as='button' className='ch'>ESG Essentials Track</Label>
                        <Label as='button' className='ch'>Competency</Label>
                        <Label as='button' className='ch'>워킹백워드</Label>
                        <Label as='button' className='ch'>Cloud Engineer Track</Label>
                        <Label as='button' className='ch'>Technology Inteligence</Label>
                        <Label as='button' className='ch'>행복 추구 실천</Label>
                        <Label as='button' className='ch'>AI/DT Literacy</Label>
                        <Label as='button' className='ch'>AI Fundamentals</Label>
                        <Label as='button' className='ch'>AI Tech.Essential</Label>
                        <Label as='button' className='ch'>Computer Vision AI</Label>
                        <Label as='button' className='ch'>Language AI</Label>
                        <Label as='button' className='ch'>Speech AI</Label>
                        <Label as='button' className='ch'>Post Corona Perspectives</Label>
                        <Label as='button' className='ch'>HR</Label>
                        <Label as='button' className='ch'>주요 국가의 이해_이슈 및 트랜드</Label>
                        <Label as='button' className='ch'>데이터 길라잡이</Label>
                        <Label as='button' className='ch'>Competency(Working Smart)</Label>
                        <Label as='button' className='ch'>DT Biz.& Implementation</Label>
                        <Label as='button' className='ch'>Deep Change Leadership</Label>
                        <Label as='button' className='ch'>ESG Essentials Track</Label>
                        <Label as='button' className='ch'>Competency</Label>
                        <Label as='button' className='ch'>워킹백워드</Label>
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