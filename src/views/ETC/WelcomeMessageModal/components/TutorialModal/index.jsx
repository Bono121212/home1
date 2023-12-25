import React, {Component} from 'react'
import { Button, Modal, Checkbox, Image } from 'semantic-ui-react'

class TutorialModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000 tutorials'>
                    <Modal.Header>
                        mySUNI의 간단한 사용 방법을 알려드릴게요.
                        <span className="counter">(<span className="now">1</span> / <span
                            className="max">4</span>)</span>
                        <div className="right-btn">
                            <Checkbox label='더 이상 보지 않기' className='base'/>
                            <Button className="close">Close</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="tutorials-wrap swiper-section type3">
                            <div className="swiper-container">
                                <div className='swiper-wrapper'>
                                    <div className="swiper-slide">
                                        <Image src='/images/all/img-info-01.png' alt=''/>
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src='/images/all/img-info-02.png' alt=''/>
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src='/images/all/img-info-03.png' alt=''/>
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src='/images/all/img-info-04.png' alt=''/>
                                    </div>
                                </div>
                                {/* next/prev 버튼 */}
                                <Button className="swiper-button-next"/>
                                <Button className="swiper-button-prev"/>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default TutorialModal;
