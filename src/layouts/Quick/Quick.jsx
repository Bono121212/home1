import React, {Component} from 'react'
import {
    Icon,
    Button
} from 'semantic-ui-react'
// import {Link} from 'react-router-dom';

export default class Quick extends Component {
    state = {activeItem: 'home'};
    handleClick = () =>
        this.setState((prevState) => ({active: !prevState.active}))

    handleClose = () => this.setState({modalOpen: false})

    render() {
        const {active} = this.state

        return (
            <section className="quick lms" onClose={this.handleClose}>
                <div className="cont-inner">
                    <div className="q-group">
                        <a href="#top" className="ui top button">TOP</a>
                        <Button className='quick' active={active} onClick={this.handleClick}/>

                        <div className="quick-menu">
                            <Button.Group className='quick-black horizontal'>
                                <Button icon>
                                    <Icon className='learning32'/><Icon className='new16'/>
                                    <span className="blind">new</span>Learning
                                </Button>
                                {/*<Button icon>*/}
                                {/*    <Icon className='community32'/><Icon className='new16'/>*/}
                                {/*    <span className="blind">new</span>Community*/}
                                {/*</Button>*/}
                                <Button icon>
                                    <Icon className='support32'/><Icon className='new16'/>
                                    <span className="blind">new</span>Support
                                </Button>
                            </Button.Group>

                            <Button.Group className='quick-black' vertical>
                                <Button>
                                    <Icon className='building'/>mySUNI Introduction
                                </Button>
                                <Button>
                                    <Icon className='admin'/>관심 Channel
                                </Button>
                                <Button>
                                    <a href="/mypage/approval-required-list">
                                        <Icon className='confirm'/>승인관리
                                    </a>
                                </Button>
                                <Button>
                                    <a href="/learning/add-personal-learning-create">
                                        <Icon className='apl'/>개인학습 등록
                                    </a>
                                </Button>
                                <Button>
                                    <a href="/common/site-map-modal">
                                        <Icon className='sitemap'/>서비스 전체보기
                                    </a>
                                </Button>
                                <Button>
                                    <Icon className='admin24'/>Admin Site
                                </Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}