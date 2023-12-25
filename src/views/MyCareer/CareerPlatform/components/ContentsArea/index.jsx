import React, { Component } from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import CardListGroup from '../CardListGroup';
import InterestedTags from './../InterestedTags/';

class ContentsArea extends Component {
    state = {
        isOnFilter: false
    }
    onClickFilter = () => this.setState((prevState) => ({ isOnFilter: !prevState.isOnFilter }));
    render() {
        return (
            <Segment className='full career-platform-page'>
                {this.props.nodata
                    ?
                    <div className="sort-reult">
                        <div className="no-cont-wrap type2">
                            <Icon className='no-contents80' /><span className="blind">콘텐츠 없음</span>
                            <div className="text">선택하신 채널에 해당하는 추천 학습 과정이 없습니다.</div>
                        </div>
                    </div>
                    :
                    <div className="sort-reult">
                        <div className="channel-of-interest">
                            <InterestedTags />
                        </div>
                        <Segment className="full learning-section type1">
                            <div className="section-head">
                                <span>나의 커리어 성장을 위한 학습 과정입니다.</span> <span className="channel">(132)</span>
                            </div>
                        </Segment>
                        <div className="section">
                            <CardListGroup />
                        </div>
                    </div>
                }
            </Segment>
        )
    }
}
export default ContentsArea
