import React, {Component} from 'react'
import {
    Button,
    Modal
} from 'semantic-ui-react'

class LinkedInModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='w700 base'>
                    <Modal.Header>
                        SK 구성원이라면 반드시 들어야 할 <span class="red">핵인싸</span>(공통권장) 과정 안내
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap3">
                                {/*컨텐츠영역 표시 개발시 삭제*/}
                                <div
                                    style={{width:'604px', padding:'200px 0', background:'#d8d8d8', color:'red', fontSize:'20px', textAlign:'center'}}>
                                    컨텐츠 영역<br/>
                                    (604*가변)
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className='pop2 p'>OK</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default LinkedInModal;
