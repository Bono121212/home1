import React, {Component} from 'react'
import {
    Form,
    Checkbox,
    Icon,
    Button,
    Image,
} from 'semantic-ui-react'
import 'react-quill/dist/quill.snow.css'
// import ReactQuill, {Quill, Mixin, Toolbar} from 'react-quill'
// import BubblePopup from '../BubblePopup'

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

                    <div className="more">
                        <div className="count sty2">
                            <div className="count-box-belt te-comment">
                                <Checkbox
                                className=""
                                label=""
                                name="radioGroup"
                                value=""
                                defaultChecked
                                />
                            </div>
                            <div className="count-box-belt2">
                                <span className="now">0</span>
                                /
                                <span className="max">500</span>
                            </div>
                        </div>

                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>


        )
    }
}

export default PhotoComment
