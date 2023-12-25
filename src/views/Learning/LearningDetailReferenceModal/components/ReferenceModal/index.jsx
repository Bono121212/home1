import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'

class LinkedInModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size,} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='w380 base front'>
                    <Modal.Header>
                        Test & Report 안내
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap6">
                                <div className="test-report-cont">
                                    모든 컨텐츠를 학습해야 Test 응시(Report 제출)가 가능합니다.
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className="ui button pop2 p">Confirm</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default LinkedInModal;
