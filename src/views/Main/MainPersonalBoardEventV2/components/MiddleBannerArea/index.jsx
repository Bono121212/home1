import React, {Component} from 'react';
import {
    Segment
} from "semantic-ui-react";
import BoxLoopModeInfinityLoop from '../BoxLoopModeInfinityLoop';


class MiddleBannerArea extends Component {
    render() {
        return (
            <>
                <div className="middle-swiper">
                    <Segment className="full">
                        <div className='swiper-section type2'>
                            <BoxLoopModeInfinityLoop/>
                        </div>
                    </Segment>
                </div>
            </>
        )
    }

}

export default MiddleBannerArea