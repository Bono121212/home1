import React, {Component} from 'react'
import {
    Form,
    Button,
} from 'semantic-ui-react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

class EditorOnlyTextComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    };

    modules = {
        toolbar: [],
    };

    formats = [];

    render() {
        return (
            <Form reply className='base text-comment-quill'>
                <div className="outline">
                    <div className="field h173">
                        <ReactQuill theme="snow"
                                    modules={this.modules}
                                    formats={this.formats}
                                    placeholder={'Writing...'}>
                        </ReactQuill>
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
                        <div className="count"><span className="now">0</span>/<span
                            className="max">500</span></div>
                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>


        )
    }
}

export default EditorOnlyTextComment
