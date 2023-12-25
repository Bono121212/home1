import React, { Component, createRef } from 'react'
import { Segment, Ref, Sticky } from 'semantic-ui-react'

import ContentsArea from './components/ContentsArea';
import TitleArea from './components/TitleArea';

import './style.css';

//import CardValueDefaultTypeList from './components/CardValueDefaultTypeList';
//import CardValueDefaultTypeList02 from './components/ForPreview/CardValueDefaultTypeList02';
//import CardValueDefaultTypeList03 from './components/ForPreview/CardValueDefaultTypeList03';
//import CardValueDefaultTypeList04 from './components/ForPreview/CardValueDefaultTypeList04';
//import OthersTopicLoop from './components/OthersTopicLoop';

export default class HotTopicList2 extends Component {
    contextRef = createRef()
    state = { likeChecked : false }

    likeCheck = () => this.setState({ likeChecked : !this.state.likeChecked })

    render() {
        return(
            <section className='content topic-wrap'>
                <Ref innerRef={this.contextRef}>
                    <Segment className="full">
                        <Sticky context={this.contextRef}>
                            <TitleArea/>
                        </Sticky>
                        gfgfg
                        <ContentsArea/>
                    </Segment>
                </Ref>
            </section>
        )
    }
}