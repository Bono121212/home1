import React, {Component} from 'react'
import {
    Form,
    Icon,
    Button,
    Image
} from 'semantic-ui-react'
import 'react-quill/dist/quill.snow.css'
// import ReactQuill, {Quill, Mixin, Toolbar} from 'react-quill'

class PhotoComment extends Component {
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
                    <div className="field h173">
                        <textarea placeholder="Writing..."/>
                        <div className="add-pic">
                            <Image src='https://i.ytimg.com/vi/QPDI36BL_2Q/maxresdefault.jpg' alt='첨부된 이미지 임시이미지'/>
                            <Button icon className="img-icon del-pic"><Icon className='close32'/>
                                <span className="blind">닫기</span>
                            </Button>
                        </div>
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
                            className="max">500</span>
                        </div>

                        {/*<div className="icon-file-upload">
                            <label htmlFor="photo-icon-upload">
                                <Icon className='photo50'/><span className="blind">photo</span>
                                <input type="file" id="photo-icon-upload"/>
                            </label>
                        </div>*/}

                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>


        )
    }
}

export default PhotoComment
