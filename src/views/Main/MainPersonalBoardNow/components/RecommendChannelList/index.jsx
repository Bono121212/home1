import React, {Component} from 'react';
import {
    Card
} from "semantic-ui-react";
import CardValueRecommend from "../CardValueRecommend";

class RecommendChannelList extends Component {
    render() {
        return (
            <>
                <div className="channel-card">
                    <Card.Group className='box-cards'>
                        <CardValueRecommend/>
                        <CardValueRecommend/>
                        <CardValueRecommend/>
                        <CardValueRecommend/>
                        <CardValueRecommend/>
                        <CardValueRecommend/>
                    </Card.Group>
                </div>
            </>
        )
    }

}

export default RecommendChannelList