import React, {Component} from 'react'
import {
    Button, Modal
} from 'semantic-ui-react'

class VideoModal extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    handleChange = (e, {value}) => this.setState({value})

    render() {
        const {activeIndex} = this.state
        return (
            <Modal trigger={ <Button className='fix bg' onClick={this.handleOpen}>Play</Button>} className='base w560'
                   open={this.state.modalOpen}
                   onClose={this.handleClose}>
                <Modal.Content>
                                video
                </Modal.Content>
            </Modal>
        )
    }
}

export default VideoModal;
