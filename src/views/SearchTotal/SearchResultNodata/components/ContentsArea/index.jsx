import React, {Component,createRef} from 'react'
import { Segment} from 'semantic-ui-react'

import TabSearchTitle from '../TabSearchTitle';
import TabSearchContents from '../TabSearchContents';

class ContentsArea extends Component {
    contextRef = createRef();

    render() {

        return (
            <div ref={this.contextRef}>
                {/* 2021-10 sticky 기능삭제 */}
                {/* <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <TabSearchTitle /> 
                </Sticky> */}
                <TabSearchTitle /> 

                <Segment attached='bottom'>
                    <TabSearchContents/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
