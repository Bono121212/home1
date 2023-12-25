import React, {Component} from 'react'
import {Icon, List, Menu} from 'semantic-ui-react'
import classNames from "classnames";

export default class SearchHeader extends Component {
    state = {activeItem: 'learning', focus: false, write: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state

        return (
            <section className="header">
                <div className="group-search">
                    <div className="cont-inner">
                        <div className="g-logo">
                            <Icon className="sk-university-search"/><span className="blind">mySUNI</span>
                        </div>
                        <div className="g-search">
                            <div className={classNames("ui h48 search input", {
                                focus: this.state.focus,
                                write: this.state.write
                            })}>
                                <input type="text" placeholder="Search"
                                       value={this.state.write}
                                       onClick={() => this.setState({focus: true})}
                                       onBlur={() => this.setState({focus: false})}
                                       onChange={(e) => this.setState({write: e.target.value})}
                                />
                                <i aria-hidden="true" className="clear link icon"
                                   onClick={() => this.setState({write: ''})}/>
                                <i aria-hidden="true" className="search link icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs">
                    <div className="cont-inner">
                        <div className="ui standard breadcrumb">
                            <a className="section">Home</a>
                            <i className="right chevron icon divider"/>
                            <a className="section">depth1</a>
                            <i className="right chevron icon divider"/>
                            <div className="active section">depth2</div>
                        </div>
                        {/* <div className="right">
                            <a href='/support/notice-list-user'>
                                <i className="support12 icon"/>
                                <span>고객센터</span>
                                <i className="arrow8 black-jump icon"/>
                            </a>
                            <div className="help-desk"><Icon className="help-tel"/>고객센터 : 02-6323-9002</div>
                        </div> */}
                    </div>
                </div>
            </section>
        )
    }
}