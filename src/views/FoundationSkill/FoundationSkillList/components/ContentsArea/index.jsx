import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
//import CommentsSort from '../CommentsSort'
import ContentsMoreView from "../ContentsMoreView";
import CardListGroup from "../CardListGroup";


class ContentsArea extends Component {
    render() {
        return (
            <Segment className='full'>

                <div className="sort-reult">
                    <div className="section-count">총 <span>288</span>개의 리스트가 있습니다.</div>
                    {/* <CommentsSort/> */}
                </div>
                <div className="section">
                    <CardListGroup/>
                    <ContentsMoreView/>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
