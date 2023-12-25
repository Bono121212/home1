import React, {Component} from 'react';
import {
    Segment
} from "semantic-ui-react";
import BoxLoopModeInfinityLoop from '../BoxLoopModeInfinityLoop';


class MiddleBannerArea extends Component {
    render() {
        return (
            <>
                <div className="visual-banner-wrap">
                    <Segment className="full wide">
                        <div className='swiper-section type4'>
                            <BoxLoopModeInfinityLoop/>
                        </div>
                    </Segment>
                </div>
            </>
        )
    }

}

export default MiddleBannerArea