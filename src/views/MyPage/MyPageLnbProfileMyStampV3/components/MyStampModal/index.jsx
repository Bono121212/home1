import React, {Component} from 'react'
import { Button, Modal, Image, Icon } from 'semantic-ui-react'
import ImgCongratulating from '../../../../../images/all/img-congratulation-stamp.svg';
import PassedStamp from '../../../../../images/all/passed_badge.png';

// import LogoImg from '../../../../../images/all/logo-gnb.svg';
// import CollegeImg from '../../../../../resources/images/all/icon-chanel-64-px.png';
// import badgeStyle from '../../../../../images/all/bg-badge-red.png';
import BdMybadge from '../../../../../images/all/bg_mystamp.png';
// import BadgeCard from '../BadgeCard';
class MyStampModal extends Component {
    state = {
        open: true,
        typeChecked: 'mySUNI'
    };
    close = () => this.setState({open: false});

    render() {
        // const {open, size } = this.state;
        // const { size, learningLevel, isCombine, linkable, badgeName } = this.props;

        return (
            <>
                <Modal.Header>
                    과정 수료증 보기
                    <Button className="close">Close</Button>
                </Modal.Header>
                <Modal.Content>
                    <div className="contents-wrapper">
                        <div className="logo-area">
                            <Icon className="sk-university"/>
                        </div>
                        <div className="ctf-wrapper">
                            <div className="image-area">
                                <Image src={ImgCongratulating}/>
                            </div>
                            <div className="message-wrapper">
                                <span>김써니님의 <strong>AI/DT Literacy</strong><br/>
                                과정 이수가 완료되었음을 알려드립니다.</span>
                                <p className="message-area">
                                    {`본 과정의 이수를 위해 의미 있는 시간과 노력을 기울여 주신 것에 진심으로 감사드리며, \nmySUNI에서 발급한 수료증을 보내드립니다.
                                    \n본 과정의 이수를 통해 습득하신 역량이 현재 업무에 실제로 활용되기 위해서는 지속적인 노력과 학습이 이루어져야 한다는 점을\n당부드리며, 앞으로도 mySUNI에 많은 관심을 부탁드립니다.
                                    \n감사합니다.`}
                                </p>
                                {/* <Image src={ImgMystamp}/> */}

                                {/* 인증서 영역 */}
                                <div className="certi_box">
                                    <div className="my_certificate mystamp">
                                        <Image src={BdMybadge} alt="인증서배경"/>
                                        <div className="txt_box">
                                            <strong className="name">김써*</strong>
                                            <p>
                                                귀하는 아래 과정을 성공적으로 이수하였기에
                                                <br />이 증서를 드립니다.
                                            </p>
                                            <span className="category">CEO특강_SUPEX 추구협의회 조대식 의장 미래를 준비하는 기업의 성공 방정식CEO특강_SUPEX 추구협의회 조대식 의장 미래를 준비하는 기업의 성공 방정식CEO특강_SUPEX 와 106자</span>
                                            <span className="date">2021.04.27</span>
                                        </div>
                                        <div className="stamp">
                                        <Image src={PassedStamp} />
                                    </div>
                                    </div>

                                    <div className="bottom-button">
                                        <Button className="fix line">수료증 출력하기</Button>
                                        <Button className="fix bg">수료증 다운로드</Button>
                                        <span>※ 이미지가 안나올 경우, 인터넷 옵션 &#8250; 도구 &#8250; 고급탭 에서 배경색 및 이미지 인쇄 부분을 체크해주세요. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
            </>
        )
    }
}

export default MyStampModal;
