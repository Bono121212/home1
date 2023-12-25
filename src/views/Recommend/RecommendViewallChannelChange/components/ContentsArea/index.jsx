import React, { Component } from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import CommentsSort from '../CommentsSort'
import CardListGroup from '../CardListGroup';

class ContentsArea extends Component {
    state = {
        isOnFilter: false
    }
    onClickFilter = () => this.setState((prevState) => ({ isOnFilter: !prevState.isOnFilter }));
    render() {
        const { isOnFilter } = this.state;
        return (
            <Segment className='full'>
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
                        <div className="section-count">총 <span>99</span>개의 추천 학습 과정이 있습니다.</div>
                        <CommentsSort isOnFilter={isOnFilter} onClickFilter={this.onClickFilter} />
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
