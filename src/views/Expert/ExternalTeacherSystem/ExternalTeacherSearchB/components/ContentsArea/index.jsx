import React, {Component, createRef} from 'react';
// import {Segment, Sticky, Menu, Label, List, Icon, Button, Checkbox } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


import TabArea from "../TabArea"



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