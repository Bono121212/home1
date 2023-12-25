import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
} from 'semantic-ui-react'
// import ButtonGroup from '../ButtonGroup'
// import Editor from "../../../../Editor";
// import _ from 'lodash'
import { Link } from 'react-router-dom'

class ContentsArea extends Component {
    contextRef = createRef()

    render() {
        return (

            <section className="content">
                {/* 작업 전 */}

                <div style={{
                    height: '300px',
                    textAlign: 'center',
                    lineHeight: '300px',
                    background: 'green',
                    color: '#fff'
                }}>영역 확인
                </div>
                <div ref={this.contextRef}>


                    <Sticky context={this.contextRef} className='tab-menu offset0'>

                        <div className="cont-inner">
                            <div className="ui sku menu">
                                <Link className="active item" data-tab="first">title <span className="count">+5</span></Link>
                                <Link className="item" data-tab="second">title <span className="count">+5</span></Link>
                                <Link className="item" data-tab="third">title <span className="count">+5</span></Link>
                            </div>
                        </div>


                    </Sticky>
                    <Segment className='full'>

                        <div className="ui bottom attached active tab segment" data-tab="first">
                            First
                        </div>
                        <div className="ui bottom attached tab segment" data-tab="second">
                            Second
                        </div>
                        <div className="ui bottom attached tab segment" data-tab="third">
                            Third
                        </div>
                        <div style={{height: '2500px'}}/>


                    </Segment>
                </div>
            </section>
        )
    }
}


export default ContentsArea
