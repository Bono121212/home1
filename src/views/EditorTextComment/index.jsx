import React, {Component} from 'react'
import {
    Form,
    Icon,
    Button,
} from 'semantic-ui-react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

class EditorTextComment extends Component {
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
            <Form reply className='base photo-comment-quill'>
                <div className="outline">
                    <div className="field h173">
                        <ReactQuill theme="snow"
                                    modules={this.modules}
                                    formats={this.formats}
                                    placeholder={'Writing...'}>
                        </ReactQuill>
                    </div>
                    <div className="more">
                        <div className="count"><span className="now">0</span>/<span
                            className="max">500</span></div>
                        <div icon className='img-icon photo'><Icon className='photo50'/>
                            <span className='blind'>photo</span>
                        </div>
                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>


        )
    }
}

export default EditorTextComment
