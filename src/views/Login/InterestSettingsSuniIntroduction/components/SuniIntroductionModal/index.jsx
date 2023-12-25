import React, {Component} from 'react'
import {
    Button, Image,
    Modal,
} from 'semantic-ui-react'
import IntroImage from '../../../../../images/all/loing-intorduction-suni.png'

class SuniIntroductionModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w900'>
                    <div className="log-intro-pop">
                        <div className="popup-bg">
                            <Image src={IntroImage} alt=''/>
                        </div>
                        <h2 className="logo">mySUNI</h2>
                        <div className="textbox1">mySUNI는 구성원 개인의 자기 성장과 행복 추구를 위해 <br/>성장 역량을 강화하는 새로운 학습 플랫폼입니다.</div>
                        <div className="textbox2">또한, 학습 조직 구축을 위한 출발점으로 Deep Change와 <br/>행복을 위한 선순환 Cycle을 만들어 갑니다.
                        </div>
                        <div className="actions3">
                            <Button className="w190 pop d">Close</Button>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}

export default SuniIntroductionModal;
