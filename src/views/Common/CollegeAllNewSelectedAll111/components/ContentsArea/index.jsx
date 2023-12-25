import React, {Component} from 'react'
import { Segment, Button, Icon } from 'semantic-ui-react'
import {CardListGroup} from '../../../CardListSample';
import ListHeaderSection from '../ListHeaderSection';

class ContentsArea extends Component {
    render() {
        return (
            <div className='page-bottom-area'>
                <Segment className='full'>
                    <div className="college-detail">
                        <div className="cont-wrap">
                            <ListHeaderSection/>
                            <div className="section">
                                <CardListGroup/>
                                <div className="more-comments">
                                    <Button icon className="left moreview">
                                        <Icon className="moreview"/>list more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
