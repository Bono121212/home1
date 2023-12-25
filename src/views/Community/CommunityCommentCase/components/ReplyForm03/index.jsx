import React, {Component, createRef} from 'react'
import {
    Form,
    Button, Icon, TextArea, Image
} from 'semantic-ui-react'

class ReplyForm02 extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Form reply className='base'>
                <div className="outline">
                    <div className="field h173">
                        <textarea placeholder="Writing...">아래 사용된 사진은 임시이미지입니다. 사진영역사이즈 240x135 사진사이즈 238x133</textarea>
                        <div className="add-pic">
                            <Image src='https://i.ytimg.com/vi/QPDI36BL_2Q/maxresdefault.jpg' alt='첨부된 이미지 임시이미지' size='small'/>
                            <Button icon className='img-icon del-pic'><Icon className='close32'/><span className='blind'>닫기</span></Button>
                        </div>
                    </div>
                    <div className="more">
                        <div className="count"><span className="now">0</span>/<span
                            className="max">500</span></div>
                        <Button icon className='img-icon photo'><Icon className='photo50'/><span className='blind'>photo</span></Button>
                        <Button cancel>Cancel</Button>
                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>
        )
    }
}


export default ReplyForm02
