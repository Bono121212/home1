import React, { Component, createRef } from 'react';
import { Ref, Segment, Sticky } from 'semantic-ui-react';
import TitleArea from './components/TitleArea';
import ContentsArea from './components/ContentsArea';
import './style.css';

export default class HottopicPage extends Component {

    contextref = createRef();

    render () {

        return(
            <section className='content topic-wrap'>
                <Ref innerRef={this.contextref}>
                    <Segment className="full">
                        <Sticky context={this.contextref}>
                            <TitleArea/>
                        </Sticky>
                        <ContentsArea/>
                    </Segment>
                </Ref>
            </section>
        )   
    }
}