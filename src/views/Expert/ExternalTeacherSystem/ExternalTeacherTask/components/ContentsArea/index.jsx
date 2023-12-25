import React, {Component, createRef} from 'react';
import TabArea from "../TabArea";

class ContentsArea extends Component {
    contextRef = createRef()
    render() {
        return (
            <div ref={this.contextRef}>
                <TabArea/>
            </div>
        )
    }
}

export default ContentsArea