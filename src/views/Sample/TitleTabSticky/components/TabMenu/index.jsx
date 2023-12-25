import React, {Component} from 'react'
import {Segment, Container, Form, Select, Input, TextArea, Checkbox, Divider} from 'semantic-ui-react'
import ButtonGroup from '../ButtonGroup'
import Editor from "../../../../Editor";

class TabMenu extends Component {
    render() {
        return (

            <section className="content">
                <div style={{height:'300px', textAlign: 'center', lineHeight:'300px', background:'green', color:'#fff'}}>영역 확인</div>
                <div className="ui tab-menu offset0 sticky">
                    <div className="cont-inner">
                        <div className="ui sku menu">
                            <a className="active item" data-tab="first">title <span className="count">+5</span></a>
                            <a className="item" data-tab="second">title <span className="count">+5</span></a>
                            <a className="item" data-tab="third">title <span className="count">+5</span></a>
                        </div>
                    </div>
                </div>
                <div className="ui full segment">
                    <div className="ui bottom attached active tab segment" data-tab="first">
                        First
                    </div>
                    <div className="ui bottom attached tab segment" data-tab="second">
                        Second
                    </div>
                    <div className="ui bottom attached tab segment" data-tab="third">
                        Third
                    </div>
                    <div style={{height:'2500px;'}}/>
                </div>


            </section>
        )
    }
}


export default TabMenu
