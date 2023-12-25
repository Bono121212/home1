import React, { Component } from 'react'
import {
    Form,
    Button,
} from 'semantic-ui-react'
import 'react-quill/dist/quill.snow.css'
// import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'
// import BubblePopup from '../TextCommentButtons/BubblePopup'


class TextCommentButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    };

    modules = {
        toolbar: [
            ['image'],
        ],
    };

    formats = [
        'image'
    ];

    render() {
        return (
            <Form reply className='base'>
                <div className="outline">
                    <div className="field">
                        <textarea placeholder="댓글을 입력해 주세요" />
                    </div>
                    {/* tag-menu */}
                    {/*<div className="tag-menu"*/}
                    {/*     style={{position: 'absolute', left: '20px', top: '50px'}}>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*    <Button className="item" data-value="">*/}
                    {/*                                    <span className="pic"><Image*/}
                    {/*                                        src='/images/all/profile-38-px.png'/></span>*/}
                    {/*        <span className="info"><span className="name"><span*/}
                    {/*            className="match">성</span>춘향</span><span className="co">SK C&C / 플랫폼 사업 1팀</span></span>*/}
                    {/*        <span className="mail">test@test.com</span>*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                    <div className="more">
                        <div className="count sty2">
                            {/* <div className="count-box-belt">
                                <Checkbox
                                className=""
                                label="의견 비공개"
                                name="radioGroup"
                                value=""
                                defaultChecked
                                />
                                <BubblePopup />
                            </div> */}
                            <div className="count-box-belt2">
                                <span className="now">0</span>
                                /
                                <span className="max">500</span>
                            </div>
                        </div>

                        <Button >Cancel</Button>
                        <Button submit>Submit</Button>
                    </div>

                </div>
            </Form>
        )
    }
}

export default TextCommentButtons

