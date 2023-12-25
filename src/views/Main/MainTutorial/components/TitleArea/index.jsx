import React, {Component} from 'react'
import {
    Segment,
} from 'semantic-ui-react'
import LoopModeInfinityLoop from '../LoopModeInfinityLoop';

class TitleArea extends Component {
    render() {
        return (
            <div className="top-swiper">
                <Segment className="full">
                    {/* .swiper-section .type1 */}
                    <div className='swiper-test swiper-section type1'>
                        <LoopModeInfinityLoop/>
                    </div>
                    {/* .swiper-section .type1 */}
                </Segment>
            </div>
        )
    }
}


export default TitleArea
