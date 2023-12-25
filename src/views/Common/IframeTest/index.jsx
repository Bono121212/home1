import React from 'react'
import ReactDOM from 'react-dom'
// import Iframe from 'react-iframe'
import './style.css';
// import {
//     TitleArea,
//     ContentsArea,
// } from './components'

class IframeTest extends React.Component {
    state = {
        iFrameHeight: '100%'
    };
    //
    // handleResize = () => {
    //     const { body, documentElement } = this.iframe.contentWindow.document;
    //     const contentHeight = Math.max(
    //         body.clientHeight,
    //         body.offsetHeight,
    //         body.scrollHeight,
    //         documentElement.clientHeight,
    //         documentElement.offsetHeight,
    //         documentElement.scrollHeight
    //     );
    //     if (contentHeight !== this.state.contentHeight) this.setState({ contentHeight });
    // };
    //
    // onLoad = () => {
    //     this.iframe.contentWindow.addEventListener('resize', this.handleResize);
    //     this.handleResize();
    // }

    //
    onLoad() {
        console.log(this.iframe);
        const obj = ReactDOM.findDOMNode(this.iframe);
        console.log( obj.contentWindow.document.body.scrollHeight);
        this.setState({ iFrameHeight: obj.contentWindow.document.body.scrollHeight });
    }

    render() {
        return(
            <>
                <iframe src="http://localhost:3004/test/index.html"
                        ref={iframe => this.iframe = iframe}
                        width="100%"
                        height={this.state.iFrameHeight}
                        scrolling="no"
                        id="myId"
                        className="myClassname iframe-test"
                        display="initial"
                        position="relative"
                        onLoad={() => this.onLoad()}
                        title="테스트"
                />
            </>
        )
    }
}

export default IframeTest
