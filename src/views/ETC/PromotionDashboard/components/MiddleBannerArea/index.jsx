import React, {Component} from 'react';
import {
    Segment
} from "semantic-ui-react";
import BoxLoopModeInfinityLoop from '../BoxLoopModeInfinityLoop';


class MiddleBannerArea extends Component {
    render() {
        return (
            <Segment className="full learning-section type1">
                <div className="visual-banner-wrap">
                    <Segment className="full">
                        <div className='swiper-section type4'>
                            <BoxLoopModeInfinityLoop/>
                        </div>
                    </Segment>
                </div>
            </Segment>
        )
    }

}

export default MiddleBannerArea