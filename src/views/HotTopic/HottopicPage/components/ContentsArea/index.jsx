import React from 'react';
import CommentsSort from '../CommentsSort';
import HotTopicCardDefault from '../HotTopicCardDefault';
import HotTopicCard02 from '../HotTopicCard02';
import HotTopicCard03 from '../HotTopicCard03';
import HotTopicCard04 from '../HotTopicCard04';

export default function ContentsArea () {
    return(
        <div className='topic-contents-wrap'>
            <div className='topic-cnt-sec'>
                <div className='topic-count'><div>총 <strong>20개</strong>의 Hot Topic이 있습니다.</div></div>
                <CommentsSort/>
            </div>
            <div className='topic-list-sec'>
                <div className="topic-card-list-wrap">
                    <HotTopicCardDefault />
                    <HotTopicCard04 />
                    <HotTopicCard03 />
                    <HotTopicCard02 />
                    <HotTopicCard02 />
                    <HotTopicCard03 />
                    <HotTopicCard02 />
                    <HotTopicCard02 />
                    <HotTopicCard03 />
                </div>
            </div>
        </div>
    )
}