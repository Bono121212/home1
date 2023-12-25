import React, {Component} from 'react'
import {Segment, Container, Form, Select, Input, TextArea, Checkbox, Divider, List, Icon, } from 'semantic-ui-react'
// import ActionButtons from '../ActionButtons'

class Header extends Component {
    render() {
        return (
            <section className="header">
                <div className="group">
                    <div className="cont-inner">
                        <div className="g-logo">
                            <i className="sk-university icon"><span className="blind">SK university</span></i>
                        </div>
                        <div className="g-menu">
                            <List link className='nav'>
                                <List.Item active>Learning</List.Item>
                                <List.Item as='a'>Community</List.Item>
                                <List.Item as='a'>Recommend</List.Item>
                                <List.Item as='a'>Create</List.Item>
                            </List>

                            <div className="nav">
                                <a className="item active">Learning</a>
                                <a className="item">Community</a>
                                <a className="item">Recommend</a>
                                <a className="item">Create</a>
                            </div>
                        </div>
                        <div className="g-search">
                            <div className="ui pop search small icon input">
                                <input type="text" placeholder="Search" value=""/>
                                <Icon className='clear link'/>
                                <Icon className='search link'/>
                                {/*<i aria-hidden="true" className="clear link icon"></i>*/}
                                {/*<Icon className='search link'/>*/}
                            </div>
                        </div>
                        <div className="g-info">
                            <button className="ui user image label">
                                <span className="name">김지우</span>
                                <span className="affiliation">SK C&C  플랫폼 개발 1팀</span>
                                <img src="../../img/profile-38-px.png" alt="profile"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs">
                    <div className="cont-inner">
                        <div className="ui standard breadcrumb">
                            <a className="section">Home</a>
                            <i className="right chevron icon divider"></i>
                            <a className="section">depth1</a>
                            <i className="right chevron icon divider"></i>
                            <div className="active section">depth2</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header
