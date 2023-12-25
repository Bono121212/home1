import React, {Component, createRef} from 'react';
// import {Segment, Sticky, Menu, Label, List, Icon, Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

// import ContentsText from "../ContentsText";
// import DiscussImg from "../../../../../../images/all/icon-community-discussion.png"
// import MaskImg from "../../../../../../images/all/icon-community-discussion2.png"
// import file from "../../../../../../images/all/icon-community-file-copy-2.png";
// import down from "../../../../../../images/all/icon-down-type-4-24-px.png";

// import IconUrl from "../../../../../../images/all/icon-url.png";
// import Series from "../Series";
// import AllStatus from "../../components/AllStatus";
import TabArea from "../../components/TabArea";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'LectureInfo'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <TabArea />
            </div>
        );
    };
};

export default ContentsArea