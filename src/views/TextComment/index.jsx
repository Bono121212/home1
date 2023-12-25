import React, {Component} from 'react'
import {
    Form,
    Button,
    Image
} from 'semantic-ui-react'
import 'react-quill/dist/quill.snow.css'

class TextComment extends Component {
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
                        <textarea placeholder="Writing..."/>
                    </div>
                    {/* tag-menu */}
                    <div className="tag-menu" style={{position: 'absolute', left: '20px', top: '50px'}}>
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
                    <div className="more">
                        <div className="count"><span className="now">0</span>/<span
                            className="max">500</span>
                        </div>

                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>


        )
    }
}

export default TextComment
