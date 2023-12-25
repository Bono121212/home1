import React, {Component} from 'react'
import { Button, Icon, Modal, Image } from 'semantic-ui-react'
import ImgCongratulating from '../../../images/all/img-congraturation.png';
import BdMybadge from '../../../images/all/badge-v2/certification_bg_white.png';
import BadgeContainer from '../BadgeContainer';
import LogoImg from '../../../images/all/badge-v2/logo-gnb.png';
import LogoImg2 from "../../../images/all/badge-v2/microsoft.png";
import CollabIcon from "../../../images/all/badge-v2/icon-badge-collabo.png";

class MyBadgeModal extends Component {
    props = { cooperation : false }
    state = {open :false }
    render() {
        const {open} = this.state;
        const {cooperation} = this.props;
        return (
            <Modal
                className="base mypage-modal-pop"
                open={open}
                onOpen={() => this.setState({open : true})}
                onClose={() => this.setState({open : false})}
                on="click"
                trigger={
                    <Button className="v_certi"><span>인증서 보기</span></Button>
                }>
                <Modal.Header>
                    Badge 인증서 보기
                    <Button className="close" onClick={()=> this.setState({open:false})}>Close</Button>
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
                                프로그램 이수가 완료되었음을 알려드립니다.</span>
                                <p className="message-area">
                                    {`본 프로그램의 이수를 위해 의미 있는 시간과 노력을 기울여 주신 것에 진심으로 감사드리며, mySUNI에서 발급한 수료증을 보내드립니다.
                                    \n『AI/DT Literacy』 프로그램을 이수한다는 것은SK의 구성원들이 필히 갖추어야 하는 AI/DT 역량에 대한 기본적인 이해와 \n지식을 보유한 것은 물론,AI/DT Category에서 제공하는 상위 과정들을 수강할 수 있는 자격을 갖추게 되었음을 의미합니다. \n본 프로그램의 이수를 통해 습득하신 역량이 현재 업무에 실제적으로 활용되기 위해서는지속적인 노력과 학습이 이루어져야 \n한다는 점을 당부드리며, 앞으로도 mySUNI AI/DT Category에 많은 관심을 부탁드립니다.
                                    \n감사합니다.`}
                                </p>
                                {/* 인증서 영역 */}
                                <div className="certi_box">
                                    <div className="my_certificate mybadge">
                                        <Image src={BdMybadge} alt="인증서배경"/>
                                        <div className="txt_box">
                                            <strong className="name">김써*</strong>
                                            <p>
                                                귀하는 아래 프로그램의 전 과정을
                                                <br/>성공적으로 이수하였으며, Badge 획득 요건을
                                                <br/>충족하였기에 이 증서를 드립니다.
                                            </p>
                                            <span className="category">AI/DT Literacy</span>
                                            <span className="date">2021.04.27</span>
                                        </div>
                                        <div className="badge badge-list-v2">{/* badge-list-type > badge-list-v2로 변경  */}
                                            <BadgeContainer 
                                                badgeName={'AI/DT Literacy'}
                                                level='Level1'
                                                badgeStyle={false} //linkable
                                                badgeColor={'blue'}
                                                cooperation={true} //협력사 유무
                                                hasPlus={true} //퍼블용
                                                membersCorp={false} //퍼블용 멤버사 구분
                                            />
                                        </div>
                                        {/* s: 인증서 하단 로고영역 */}
                                        <div className="bottom_logo">
                                            <span className='ui image'>
                                                <img src={LogoImg} alt="logo"/>
                                            </span>
                                            {
                                                cooperation && //협력사 존재하는 경우
                                                <>
                                                    <em className="icon collabo"><img src={CollabIcon} alt="collabo icon"/></em>
                                                    <span className='ui image'>
                                                        <img src={LogoImg2} alt="logo"/>
                                                    </span>
                                                </>
                                            }
                                        </div>
                                        {/* e: 인증서 하단 로고영역 */}
                                    </div>
                                </div>

                                <div className="bottom-button">
                                    <Button className="fix line">인증서 출력하기</Button>
                                    <Button className="fix bg">인증서 다운로드</Button>
                                    <span>※ 이미지가 안나올 경우, 인터넷 옵션 &#8250; 도구 &#8250; 고급탭 에서 배경색 및 이미지 인쇄 부분을 체크해주세요. </span>
                                    <span>※ 인쇄 사이즈 조정이 어려우면, 이미지 파일을 다운받아 인쇄하여 주시기 바랍니다. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
            </Modal>
        )
    }
}

export default MyBadgeModal;
