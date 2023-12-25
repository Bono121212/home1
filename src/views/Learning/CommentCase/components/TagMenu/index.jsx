import React, {Component, createRef} from 'react'
import {
    Image,
    Button,
} from 'semantic-ui-react'

class TagMenu extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="tag-menu"
                 style={{position: 'absolute', left: '20px', top: '50px'}}>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
                <Button className="item" data-value="">
                                                        <span className="pic"><Image
                                                            src='/images/all/profile-38-px.png'/></span>
                    <span className="info"><span className="name"><span
                        className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>
                    <span className="mail">test@test.com</span>
                </Button>
            </div>
        )
    }
}


export default TagMenu
