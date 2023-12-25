import React, {Component} from 'react'
// import ActionButtons from '../ActionButtons'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    };

    modules = {
        toolbar: [
            [{'header': [1, 2, 3, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    render() {
        return (
            <ReactQuill theme="snow"
                        placeholder={(this.props.placeholder) ? this.props.placeholder : "내용을 입력해주세요."}
                        className='ql-editor-text'
                        modules={this.modules}
                        formats={this.formats}>
            </ReactQuill>
        )
    }
}

export default Editor