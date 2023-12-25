import React, {Component,createRef} from 'react'
import { Segment, Sticky } from 'semantic-ui-react'

import TabSearchTitle from '../TabSearchTitle';
import TabSearchContents from '../TabSearchContents';

class ContentsArea extends Component {
    contextRef = createRef();

    render() {

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <TabSearchTitle /> 
                </Sticky>

                <Segment attached='bottom'>
                    <TabSearchContents/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
