import React, { useState } from 'react'
import { Button, Label } from 'semantic-ui-react'
import classNames from 'classnames';

function InterestedTags() {
    /* 변경되는 상태들 */
    const [channelSelected, setChannelSelected] = useState(true);
    const [openChannel, setOpenChannel] = useState(true);

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
                        {/* <Label as='button' className={classNames('ch', { 'active' : channelSelected })} onClick={channelSelect}>전체</Label> */}
                        <Label as='button' className={classNames('ch career-skill none', { 'active' : channelSelected })} onClick={channelSelect}>데이터 길라잡이</Label>
                        <Label as='button' className='ch career-skill none'>AI Biz. Implementation</Label>
                        <Label as='button' className='ch career-skill have'>Competency(Working Smart)</Label>
                        <Label as='button' className='ch career-skill have'>DT Biz.& Implementation</Label>
                        <Label as='button' className='ch career-skill need'>Deep Change Leadership</Label>
                        <Label as='button' className='ch career-skill have'>ESG Essentials Track</Label>
                        <Label as='button' className='ch career-skill have'>Competency</Label>
                        <Label as='button' className='ch career-skill need'>워킹백워드</Label>
                        <Label as='button' className='ch career-skill need'>Cloud Engineer Track</Label>
                        <Label as='button' className='ch career-skill need'>Technology Inteligence</Label>
                        <Label as='button' className='ch career-skill have'>행복 추구 실천</Label>
                        <Label as='button' className='ch career-skill have'>AI/DT Literacy</Label>
                        <Label as='button' className='ch career-skill none'>AI Fundamentals</Label>
                        <Label as='button' className='ch career-skill none'>AI Tech.Essential</Label>
                        <Label as='button' className='ch career-skill none'>Computer Vision AI</Label>
                        <Label as='button' className='ch career-skill none'>Language AI</Label>
                        <Label as='button' className='ch career-skill none'>Speech AI</Label>
                        <Label as='button' className='ch career-skill none'>Post Corona Perspectives</Label>
                        <Label as='button' className='ch career-skill none'>HR</Label>
                        <Label as='button' className='ch career-skill none'>주요 국가의 이해_이슈 및 트랜드</Label>
                        <Label as='button' className='ch career-skill none'>데이터 길라잡이</Label>
                        <Label as='button' className='ch career-skill none'>Competency(Working Smart)</Label>
                        <Label as='button' className='ch career-skill none'>DT Biz.& Implementation</Label>
                        <Label as='button' className='ch career-skill none'>Deep Change Leadership</Label>
                        <Label as='button' className='ch career-skill none'>ESG Essentials Track</Label>
                        <Label as='button' className='ch career-skill none'>Competency</Label>
                        <Label as='button' className='ch career-skill none'>워킹백워드</Label>
                    </div>
                </div>
            </div>
    );
}

export default InterestedTags
